# Green web shop

<div align="justify">
A simple e-commerce full stack web application build using MERN stack. The application lists the future energy devices for sustainable mobility from which user can create a wishlist.

</div>

[⇨ Green web shop](https://arko92.github.io/green-web-shop/)

## Application function

The user can customize a wishlist from the listed products by adding or deleting items. 

## Introduction

<div align="justify">
This is a very basic full stack web application which is build to understand the workflow from an app development to its deployment.
</div>


## Workflow

App development to deployment is carried out in the following broad steps:

1. [App build up](#Appbuildup)
2. Creating and deploying mongodb database
3. API creation using nodejs to fetch data
4. Deployment of API to AWS using serverless lambda functions
5. Creation of API gateway endpoint
6. Deploying app to github



<h3 id="Appbuildup">App build up</h3>

<div align="justify">

The application is build up in REACT. The app consists of five components app, product, wishlist, product-condensed and services

#### app

The main component of the application which wraps other helping components.

#### product

A react component which lists the products using the fetched data from a mongoDB database collection. The listed products can be added to the wishlist or removed from the wishlist using a data service. Conditional styling is used.

#### product-condensed

A react component which condenses the products (i.e. with lesser details) so that they can be listed on the wishlist.

#### wishlist

A react component which displays the selected wishlist items. The items in the wishlist item can also be removed.

#### services

The app comprises of four services. A data service, a http service, a notification service and an API service. 

**Data service:**
Data service perform the following functions:

* Adds an item to the wishList & notifies the components
* Removes an item from the wishList & notifies the components
* Check if an item is already present on the wishlist

**HTTP service:**

Fetches data from a serverless AWS lambda function

**Notification service:**

It notifies components whenever there is a change so that they can update accordingly. With this service we are not hard linking different components of the app but only updating the components whenenver there is a change by still remaining independent from each other. 

**green shop API:**

A serverless API to fetch data from a mongoDB database cluster. AWS lambda function is used.

</div>
