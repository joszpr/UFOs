# UFOs

### **Overview** ###
Analysis performed on provided UFO sighting information with the request to transform the data into an interactive HTML page that, once published, would allow users to navigate the data and filter by different search parameters. 

The data used was provided by journalist Dana. It contains a JavaScript file with multiple UFO sightings entries. Each entry included the sighting location, time and description of the event. An HTML page was created using JavaScript as the base code in order to prepare the data to be published online. Key factors of the code included designing a table that would present the data by columns. The table needed to be interactive in order to allow the website visitors to filter the table by different search parameters. 
Bootstrap was used to increase the functionality of the JavaScript code and CSS was used to style and layout the HTML page. 

### **Results** ###

![Page Screenshot](https://user-images.githubusercontent.com/85839235/133002048-76c9b58e-2c24-461e-a5f3-64ff18f3ee05.png)

**Heading**
-	The heading was stylized by Jumbotron with an open source image from NASA. 

**Body**
-	Article summary and text was the first part of the body layout. 

**Table**
-	The table was populated with the data from the JavaScript file. The data from the file was separated in columns in order to allow easier visualization and the filtering functionality.

-	On the left side of the page is the filtering options. The user can input different search parameters in order to narrow the data rows for the table. The user can input single or multiple parameters for their search. 

-	A Clear Filter button was added in the functionality of the filtering options. It allows the user to zoom back from the data that they may have filtered in order to do other searches with ease. 

**Backend**
-	The JavaScript code includes a functionality that would capture the search parameters done by the user. At this moment the search data has an output, but no analysis has been done with it as of yet. 

![Console Screenshot](https://user-images.githubusercontent.com/85839235/133002215-00a2fd43-2302-4ade-81e0-fbf6c6ebed85.png)


### **Summary** ###
The original design of the page included a “Filter button” for the Filter Search. It allowed the user to input all the search parameters at once before starting the filtering process. This functionality was replaced by a more interactive and responsive method. Once the users changed the value of a single category, the table will automatically update itself to fit the search parameter. This allows for a more responsive and elegant website. Although the functionality is superior to pressing the Filter button, it does have a drawback. If the user was looking at the table data in order to gather information for a more specific search, the table will update automatically and will change the table positioning of the rows. 

![Filter button 2](https://user-images.githubusercontent.com/85839235/133002301-f7c6a01e-753c-45ef-b074-c21ac408f2cc.png)
###### Snapshot of what the Filter button looked before it was removed ######

The Clear Filter functionality was added to the Filter Search option in order to aid the user to navigate their queries more comfortably. Without the Clear Filter button, the users would have to manually delete every search parameter in order to bring back the full table data. 

**Recommendations**

Overall, the HTML code presents the current available data in a easy to understand and manipulate way. It is also designed to be compatible with different browsers and portable devices. All the requirements for the analysis are met but there are recommendations for future changes. 

-	When all the rows are loaded, the page is too long vertically. As the data grows and more entries are added, the table will keep increasing the size of the page. It may also slow the page functionality and loading speed. This issue could be resolved by structuring the table in multiple pages within the table. That would relieve the page from having to load all the data at once and only present portions of it.

-	Filtering options could be added at the columns of the table or at the input boxes in the Filtering Search as a drop-down menu. As of right now, the users cannot see all the countries, cities or states the data has information on without browsing all the entries.  Allowing the user to know the filtering parameters option will help in the visualization of the data.

- 	An exporting or saving option could be added for the user to be able to share or save their search results. 

-	The original data from the JavaScript file is mostly lowercase. The search functionality is also case sensitive. The data could be cleaned in order to make the first letters of the word to be capitalized since users may try to type states or countries with uppercase letters. 

-	The JavaScript code allows the functionality to capture the user changes. It may be useful to store all the search parameters once the code goes live in order to be able to visualize how the users are interacting with the table. From finding the most frequent methods they try to write their queries, to the most popular search criteria. The data will help to understand what changes could be made to make the navigation of the website a better experience for the users. 
