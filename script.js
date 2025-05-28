
    window.addEventListener('DOMContentLoaded', () => {
      const suggestions = {
        all: ["What is Sensex?", "Nifty today live", "Best dividend stocks 2024", "How to apply for IPO", "T+1 settlement rules"],
        stocks: ["Reliance Industries share price", "Infosys quarterly results", "HDFC Bank dividend record date", "TCS bonus history"],
        fo: ["Nifty 50 options chain", "Bank Nifty futures lot size", "How to trade F&O in India"],
        mf: ["Top mutual funds for SIP", "Nippon India Small Cap Fund", "HDFC Flexi Cap Fund"],
        etf: ["Groww Nifty India Defence ETF", "Tata Gold Exchange Traded Fund", "Nippon India ETF Gold BeES", "Groww Gold ETF", "Nippon India Silver ETF"],
        faqs: ["How to open demat account?", "Is trading safe for beginners?", "What are ETFs?", "What is intraday trading?"]
      };

      const searchInput = document.getElementById('searchInput');
      const suggestionsBox = document.getElementById('searchSuggestions');
      const tabContent = document.getElementById('tabContent');

      window.showTab = function(tabType) {
        document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.tab[onclick="showTab('${tabType}')"]`).classList.add('active');

        const items = suggestions[tabType].map(text => `<li onclick="selectSuggestion('${text}')">${text}</li>`).join('');
        tabContent.innerHTML = `<ul>${items}</ul>`;
      };

      window.selectSuggestion = function(text) {
        searchInput.value = text;
        suggestionsBox.style.display = 'none';
        window.open(`https://www.google.com/search?q=${encodeURIComponent(text)}`, '_blank');
      };

      searchInput.addEventListener('focus', () => {
        suggestionsBox.style.display = 'block';
        showTab('all');
      });

      document.addEventListener('click', (e) => {
        if (!suggestionsBox.contains(e.target) && e.target !== searchInput) {
          suggestionsBox.style.display = 'none';
        }
      });

      document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        const allowedKeywords = ['stock', 'nifty', 'sensex', 'dividend', 'ipo', 'trading', 'market', 'share', 'exchange', 'equity'];
        const isTradingRelated = allowedKeywords.some(keyword => query.includes(keyword));

        if (!isTradingRelated) {
          alert('Please search for trading-related information only.');
          return;
        }

        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchURL, '_blank');
      });
    });
 
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    let timer;

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      dropdown.classList.add('open');
    });

    dropdown.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        dropdown.classList.remove('open');
      }, 300); // wait 300ms before hiding, allows user to move cursor
    });
  });

  const nav = document.querySelector('.sticky-nav');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Start with transparent
  nav.classList.add('transparent');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
      nav.classList.remove('transparent');
      nav.classList.add('solid');
    });

    dropdown.addEventListener('mouseleave', () => {
      nav.classList.remove('solid');
      nav.classList.add('transparent');
    });
  });

  // Optional: maintain transparency on normal nav hover
  nav.addEventListener('mouseenter', () => {
    if (!nav.classList.contains('solid')) {
      nav.classList.add('transparent');
    }
  });
