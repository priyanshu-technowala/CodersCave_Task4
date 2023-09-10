const shortenUrl = async () => {
    const longUrl = document.getElementById('long-url').value;
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const data = await response.json();
    const shortUrl = data.result.shortUrl;
  
    document.getElementById('short-url-container').innerHTML = `
      <p>Shortened URL: <a href="${shortUrl}">${shortUrl}</a></p>
      <button onclick="copyToClipboard()">Copy to clipboard</button>
    `;
  
    document.getElementById('short-url-container').style.display = 'block';
  };
  
  const copyToClipboard = () => {
    const el = document.getElementById('short-url');
    navigator.clipboard.writeText(el.textContent);
    alert('Copied to clipboard!');
  };
  
  document.getElementById('shortenBtn').addEventListener('click', shortenUrl);
  