// Function to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to process the fetched data
function processData(data) {
  // Perform operations on the data
  const filteredData = data.filter(item => item.category === 'books');
  const sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
  
  // Output the processed data
  console.log('Filtered and sorted data:', sortedData);
}

// Invoke the data fetching and processing functions
fetchData()
  .then(data => processData(data))
  .catch(error => console.error('Error:', error));