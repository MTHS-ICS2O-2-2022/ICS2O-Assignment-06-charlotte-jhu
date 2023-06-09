// Copyright (c) 2023 Charlotte Jhu All rights reserved
//
// Created by: Charlotte Jhu
// Created on: June 2023
// This file contains the JS functions for index.html

"use strict"

const getPicture = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    document.getElementById("picture").innerHTML = "<img src=" + jsonData.url + ">"
  } catch (err) {
    console.error(err)
  }
}

getPicture("https://random.dog/woof.json")
