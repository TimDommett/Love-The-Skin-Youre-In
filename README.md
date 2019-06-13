# Love The Skin You're In

LTSYI is a website for finding, reviewing and advertising tattoo studios. As tattoos become less taboo and more accepted by modern society, more people are searching for quality studios for their life long commitment on their skin. 

 
**Major Features:**

1. Google Maps

* Google Maps Integration enables searching for studios by location and for setting the location of studios when creating advertisements. 
* Includes location search bars with autocomplete for geo-locations. 

2. Reviews

* Implemented a commenting and star rating system, which enables users to review tattoo studios from their experiences with them. 
* There is also a pricing scale which helps users get an idea of how expensive the studio is, due to the high variation in tattoo studios hourly rates. 

3. AWS

* File uploading enables adding of photos to posts to improve user experience.

4. Frontend Authentication

* Enables the password to never be sent between the client and server, therefore maintaining security, only the password digest that has been encrypted using bcrypt will ever be sent to the server. 
* Persistent login using session controllers/tokens.




**Production Timeline:**


**1. Created frontend User Authentication. New account creation and login. (25/03/2019, 2 days)**

* Users can sign up, sign in, log out
* Users can't use certain features without logging in (creating posts, voting and commenting)

**2. Posts (26/03/2019, 0.5 days)**

* Logged in users can create posts of tattoo studios
* Users can view a list posts
* Logged in users can comment on posts

**3. Uploading of images (27/03/2019, 1 day)**

* Enabled uploading of images for posts with AWS
* Displaying of uploaded image for each post 

**4. Google Maps Integration (28/03/2019, 2 days)**
* Enables searching for studios by location and for setting the location of studios when creating advertisements
* Including location search bars with autocomplete for geo-locations

**5. Reviewing (2/04/2019, 1 day)**

* Logged in users can review studios
* Reviews use a commenting and star rating system, which enables users to review tattoo studios
* A pricing scale helps users get an idea of how expensive the studio is

**6. Production README (15/04/2019, 0.5 days)**


*Please be aware that in the early stages of creating LTSYI, it was intended for a different use, therefore advertisements of tattoo studios are controlled by "accomodations".
