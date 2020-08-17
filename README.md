Assignment: Video library
Story
There is apprehension that Youtube servers will be unavailable since It’s hard to predict the
nearest future. Your company has been engaged to provide internal service so Youtube data
can be stored as a backup.
Requirements
Important: For the sake of simplicity focus on the backend side - your primary job is to prepare
suitable API. The requirements assume an existing page but for now it is not obligatory - you
can test your API with Postman.
Story title User story description Acceptance criteria
Search
videos
randomly
As a User,
I want to go to main page,
So that I see 5 random
videos.
Given that there are any number
({0..n}) of saved Video data,
When I open the website (/),
Then ensure I see a list of 5
randomly generated videos.
Search
videos by
title and
description
As a User,
I want to search videos by
title and description,
So that I get 5 videos
containing the provided
phrase.
Given that there are any number
({0..n}) of saved Video data,
When I open the website (/),
Then ensure I see a search field
which after submitting will list 5
videos containing given subtext.
Search
videos by tag
As a User,
I want to search videos by
selecting tag,
So I get 5 suitable videos.
When I open the website (/),
And I click any tag link,
Then ensure I see 5 videos
connected with that tag.
Add new
video url
As a User,
I want to be able to add a
new video,
So that I can extend the data
When I open the website (/),
And I click the "Add New Video" link
Then ensure I see a form where I can
add details of the new video,
And if I submit the form, this data
gets saved.
Update
existing
As a User,
I want to be able to change
When I open the website (/),
And I click the Video,
video
details of an existing video,
So that I can keep them upto-date with the current info.
Then ensure I see a form prefilled
with the details of the Video,
And when I submit the changed data,
ensure it gets save,
And ensure it overwrites the previous
details, not creating a new Video.
For the sake of make this assignment easier to understand, each User Story represents an
API endpoint in the web application:
Get random videos [ GET /api/videos?random=true ]
• It should return a list of 5 random videos.
Add new video [ POST /api/videos ]
• Request validation rules:
• Video url:
• single line text
• required
• has to fit url syntax
• Video title:
• single line text
• required
• minimum length: 3 characters
• Video description:
• multi-line text
• required
• Tags:
• single line text input with value(s) starting with #, separated by whitelines
• optional
• Uploaded by:
• single line number input
• minimum length: 3 characters
• optional
• Contact email:
• single line input
• has to fit email syntax
• optional
• When the user clicks the "Add new Video" (sends POST request) button, the form
should submit it's data
• Id for new video is auto-generated
• ... and the server should add these data to the csv storage.
Update existing Video [ PUT /video/{{video_id}} ]
• The same form as the add page, but filled in with data of the given Video.
• This data should be read from the csv file.
• An additional checkbox with “archive” label
• Archived videos should not be visible whenever I’m retrieving data
