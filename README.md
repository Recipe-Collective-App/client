# Client

## User Stories

**STANDARD CRITERIA**

```
As a user 
So that I can find a recipe to make a meal
I want to view the recipes I’ve saved and be able to filter and search
```

```
As a user
So that I can save a recipe
I want to be able to save a recipe from the web (similar to Pinterest)
 - React useFetch API (https://www.freecodecamp.org/news/fetch-data-react/, https://www.copycat.dev/blog/react-fetch/)
 - Take only relevant data (https://javascript.plainenglish.io/what-is-web-scraping-and-how-to-scrap-a-website-using-node-6e82da37b3f5)
```

```
As a user
So that I know what ingredients to buy at the supermarket
I want select and emailing ingredients
```

```
As a user
So that I can store my own recipes
I want to complete a form and save the recipe
```

```
As a product owner
So that users are not abusing the web app
I want to be able to delete an inappropriate recipe
```

```
As a user
So that I can update a recipe
I want to edit my saved recipes 
```

```
As a user
So that I can see only my recipes
I want to be able to sign up
```

```
As a user
So that I can see only my recipes
I want to be able to log in
```

**EXTENDED CRITERIA**

```
As a user
So that I can see my family and friend’s recipes
I want to be friends with them and see what they are cooking
```

```
As a user
So that I have my shopping list for my weekly shop
I want to connect my shopping list to my calendar
```

```
As a user
So that I can save a recipe from a photo I took on my phone
I want to be able to upload the photo and have the recipe saved
- Textract (Amazon)
- Google Vision / Tesseract
- Microsoft Azure
```

## UX/UI Design
Completed on Figma: [view here](https://www.figma.com/file/WSduqphwN1tl58hm4iOdjV/Recipe-App?node-id=0%3A1&t=HQkNCDCGTKooCgW1-0)

## Component Hierarchy

```
PublicHome.js
|
|-- Header.jsx
|-- Footer.jsx
|-- Sign Up.jsx
|-- Log In.jsx
```

## Testing
Header.jsx
1. Test that there are two buttons
2. Test that it contains "The Recipe Collective"

Footer.jsx
As we do not expect the footer to change, take snapshot