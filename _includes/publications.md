<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width:100;height:auto;">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.title_link | default: link.page | default: link.pdf }}" target="_blank" rel="noopener noreferrer">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer" style="font-size:12px;" onclick="openPDF('{{ link.pdf }}'); return false;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="javascript:void(0)" onclick="showBibtex('{{ link.bibtex }}')" class="btn btn-sm z-depth-0" role="button" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>

<!-- BibTeX Modal -->
<div id="bibtexModal" class="bibtex-modal" style="display: none;">
  <div class="modal-content">
    <div class="modal-header">
      <h3>BibTeX formatted citation</h3>
      <span class="close-btn" onclick="closeBibtex()">&times;</span>
    </div>
    <div class="modal-body">
      <textarea id="bibtexContent" readonly></textarea>
      <div class="modal-buttons">
        <button onclick="copyBibtex()" class="copy-btn">Copy to Clipboard</button>
        <button onclick="closeBibtex()" class="close-modal-btn">Close</button>
      </div>
    </div>
  </div>
</div>

<style>
/* Modal animations */
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes modalFadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}

@keyframes backdropFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.bibtex-modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  animation: backdropFadeIn 0.3s ease-out;
}

.modal-content {
  background-color: #fff;
  padding: 0;
  border: none;
  border-radius: 16px;
  width: 100%;
  max-width: 580px;
  max-height: 90vh;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  font-family: inherit;
  overflow: hidden;
  animation: modalFadeIn 0.3s ease-out;
}

.modal-content.closing {
  animation: modalFadeOut 0.2s ease-in;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  border-bottom: 1px solid #e5e7eb;
  background-color: #fafafa;
}

.modal-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  font-family: inherit;
}

.close-btn {
  font-size: 24px;
  font-weight: 400;
  color: #6b7280;
  cursor: pointer;
  border: none;
  background: none;
  padding: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-family: inherit;
}

.close-btn:hover {
  background-color: #f3f4f6;
  color: #374151;
  transform: scale(1.1);
}

.modal-body {
  padding: 20px 24px 20px 24px;
  max-height: calc(90vh - 140px);
  overflow-y: auto;
}

#bibtexContent {
  width: 100%;
  height: 220px;
  padding: 14px;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.5;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  background-color: #f9fafb;
  resize: vertical;
  margin-bottom: 15px;
  color: #1f2937;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
  outline: none;
}

#bibtexContent:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.modal-buttons {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.copy-btn, .close-modal-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
}

.copy-btn {
  background-color: #3b82f6;
  color: white;
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.3);
}

.copy-btn:hover {
  background-color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.copy-btn:active {
  transform: translateY(0);
}

.close-modal-btn {
  background-color: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.close-modal-btn:hover {
  background-color: #e5e7eb;
  border-color: #9ca3af;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .bibtex-modal {
    padding: 16px;
  }
  
  .modal-content {
    max-width: 100%;
    border-radius: 12px;
  }
  
  .modal-header {
    padding: 20px 24px;
  }
  
  .modal-header h3 {
    font-size: 16px;
  }
  
  .modal-body {
    padding: 24px;
  }
  
  #bibtexContent {
    height: 200px;
    font-size: 12px;
  }
  
  .modal-buttons {
    flex-direction: column-reverse;
  }
  
  .copy-btn, .close-modal-btn {
    width: 100%;
    justify-content: center;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .modal-content {
    background-color: #1f2937;
    color: #f9fafb;
  }
  
  .modal-header {
    border-bottom-color: #374151;
    background-color: #111827;
  }
  
  .modal-header h3 {
    color: #f9fafb;
  }
  
  .close-btn {
    color: #9ca3af;
  }
  
  .close-btn:hover {
    background-color: #374151;
    color: #f3f4f6;
  }
  
  #bibtexContent {
    background-color: #111827;
    border-color: #374151;
    color: #f9fafb;
  }
  
  #bibtexContent:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
  
  .close-modal-btn {
    background-color: #374151;
    color: #f3f4f6;
    border-color: #4b5563;
  }
  
  .close-modal-btn:hover {
    background-color: #4b5563;
    border-color: #6b7280;
  }
}
</style>

<script src="{{ '/assets/js/publications.js' | relative_url }}"></script>

