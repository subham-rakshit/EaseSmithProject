# Run the project

```
git clone https://github.com/subham-rakshit/EaseSmithProject

cd project_name

npm init
npm install
npm run dev
```

# Approach

- Reviewing the figma file and project requirments.
- Copy the figma image file and paste in Excalidraw software where I draw the outlines of all containers for better understanding
- For Nursery carousal my approach is to move the child container according to the width of the parent container. Firstly select the child container by document.queryselector(container_classname) then extract the width of that container by .clientWidth after that adding and substracting scrollLeft value with the width of the container. And finally put overflow hidden in parent container.
- For adding cart item I use redux toolkit for state management. Simply I store the product details in the local storage which ever product is confirm for adding in to the cart. And count the length of that local storage cart list and put into the cart count in header.

# Difficulties

Basically I face little bit difficulties of storing data in to local storage through react redux. So i took help from ChatGPT and Redux toolkit DOCS. And learn the new item react-persist for persisiting the store. Other wise I didn't face any difficulties. I can also do state management with localStorage.setItem() and localStorage.getItem() as well.
