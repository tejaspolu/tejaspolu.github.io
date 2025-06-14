async function showBibtex(bibtexPath) {
  try {
    const response = await fetch(bibtexPath);
    const bibtexText = await response.text();
    document.getElementById('bibtexContent').value = bibtexText;
    
    const modal = document.getElementById('bibtexModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      document.getElementById('bibtexContent').focus();
    }, 100);
  } catch (error) {
    console.error('Error loading BibTeX:', error);
    alert('Error loading BibTeX file. Please try again.');
  }
}

function closeBibtex() {
  const modal = document.getElementById('bibtexModal');
  const modalContent = modal.querySelector('.modal-content');
  
  modalContent.classList.add('closing');
  
  setTimeout(() => {
    modal.style.display = 'none';
    modalContent.classList.remove('closing');
    document.body.style.overflow = 'auto';
  }, 200);
}

async function copyBibtex() {
  const textArea = document.getElementById('bibtexContent');
  const copyBtn = document.querySelector('.copy-btn');
  const originalText = copyBtn.textContent;
  
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textArea.value);
    } else {
      textArea.select();
      textArea.setSelectionRange(0, 99999);
      document.execCommand('copy');
    }
    
    copyBtn.textContent = '✓ Copied!';
    copyBtn.style.backgroundColor = '#10b981';
    copyBtn.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
      copyBtn.textContent = originalText;
      copyBtn.style.backgroundColor = '#3b82f6';
      copyBtn.style.transform = 'scale(1)';
    }, 2000);
    
  } catch (err) {
    console.error('Copy failed:', err);
    copyBtn.textContent = 'Copy failed';
    copyBtn.style.backgroundColor = '#ef4444';
    
    setTimeout(() => {
      copyBtn.textContent = originalText;
      copyBtn.style.backgroundColor = '#3b82f6';
    }, 2000);
  }
}

function openPDF(pdfUrl) {
  if (pdfUrl.includes('researchgate.net')) {
    const newWindow = window.open('', '_blank', 'noopener,noreferrer,width=1200,height=800,scrollbars=yes,resizable=yes');
    
    if (newWindow) {
      const htmlContent = '<!DOCTYPE html><html><head><title>Loading PDF...</title><style>body{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f5f5f5}.loading{text-align:center;padding:20px;background:white;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1)}</style></head><body><div class="loading"><h3>Loading PDF...</h3><p>If the PDF doesn\'t load automatically, <a href="' + pdfUrl + '" target="_self">click here</a></p></div><script>setTimeout(function(){window.location.href="' + pdfUrl + '"},1000);</script></body></html>';
      newWindow.document.write(htmlContent);
      newWindow.document.close();
    } else {
      window.location.href = pdfUrl;
    }
  } else {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Close modal when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('bibtexModal');
    if (event.target === modal) {
      closeBibtex();
    }
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const modal = document.getElementById('bibtexModal');
      if (modal.style.display === 'flex') {
        closeBibtex();
      }
    }
  });

  // Prevent modal content clicks from closing modal
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) {
    modalContent.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }
}); 