/*
Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

    http://aws.amazon.com/apache2.0/

or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/*

  Set Javascript specific to the extension viewer view in this file.

*/

//function renderText(val) {
//    document.getElementById('scrolling-text').innerHTML = "<marquee behavior=\"scroll\" direction=\"left\">" + val + "</marquee>";
//}
var preview = { previewtext: "intial" }

Vue.component('previewtext', {
    props:['message'],
  template: '<marquee class="preview-text">{{message}}</marquee>',
    data: function(){
        return preview
    }
})

//Vue.component('textfield', {
//    template: '</input>'
//})

//main application
var app = new Vue({
    el: '#app',
    data: {
        title: 'Submissions Open!',
        previewtext: '',
        page: 'submission',
        entry1: 'test1',
        entry2: 'test2',
        entry3: 'test3',
        entry4: 'test4',
        entry5: 'test5'
    },
    methods: {
        submit: function (event) {
          if(!this.previewtext){
              alert('Invalid Input')
          }
            
        }
    }
})