The link of the API provided is https://dog.ceo/dog-api/  In this website there many types of url links we can get the data of the dogs and also images of the dogs In the image fetching url's there are 
again three types one url after fetching returns JSON object with image url based on the breed  and another url gives 3 links which is also based on breeds given dynamically in the
main url.and another url after fetching generates JSON object containing one random breed image url  Here the above mentioned  links are used for fetching.

The JSON object After fetching the given link is a object with message containing random image generating link which is returned from response.json file. Initially 5 random pictures are generated 
and ,in the select bar if we select anybreed it will be dynamically taken to the url to fetch  and generate 5 random images of that breed  and similarly for search button after giving the text  and clicking  on the
search button  the text is  given to the url dynamically in place of breed  and again fetching the link 5 times to generate 5 images.In this way the site works.
