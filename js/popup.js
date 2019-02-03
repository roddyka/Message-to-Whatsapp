// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let send = document.getElementById('send');

send.onclick = function(){

  let message = document.getElementById("message").value;
  let country  = document.getElementById("country").value;
  let number = document.getElementById("number").value;
  let linkapi = "https://web.whatsapp.com/send?phone="+country+number+"&text="+message+"";
  // let linkapi = "https://api.whatsapp.com/send?phone="+country+number+"&text="+message+"";
  if(country && number){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          //tabs[0].id,
          {code: "window.location.href = '"+linkapi+"'"}
        );
    });
  }else{
    document.getElementById("mensagemerro").classList.remove("hidden");
    document.getElementById("mensagemerro").classList.add("blink_me");
  }
  
}