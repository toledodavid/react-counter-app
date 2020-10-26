// console.log('Hello!');

export const getImage = async() => {

  try {

    const apiKey = 'FMH46HzHk8wFS4OcWPBUXvpm7eYt14bF';

    const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    const {data} = await response.json();
    const {url} = data.images.original;
    // console.log(url);

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append(img);
    return url;

  } catch (error) {
    // console.log(error);
    return 'There is and error';
  }

}

// getImage();