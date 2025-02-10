document.getElementById('searchButton').addEventListener('click', async () => {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<p>Loading gyms...</p>'; // Show loading message

  try {
    const response = await fetch('/api/gyms');
    const gyms = await response.json();

    resultsDiv.innerHTML = ''; // Clear loading message

    if (gyms.length === 0) {
      resultsDiv.innerHTML = '<p>No gyms found near you.</p>';
      return;
    }

    gyms.forEach(gym => {
      const gymDiv = document.createElement('div');
      gymDiv.className = 'gym';
      gymDiv.innerHTML = `
        <h3>${gym.name}</h3>
        <p><strong>Address:</strong> ${gym.Address}</p>
        <p><strong>City:</strong> ${gym.city}</p>
        <p><strong>District:</strong> ${gym.district}</p>
      `;
      resultsDiv.appendChild(gymDiv);
    });
  } catch (error) {
    console.error('Error fetching gyms:', error);
    resultsDiv.innerHTML = '<p>Failed to fetch gyms. Please try again.</p>';
  }
});