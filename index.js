


document.getElementById("submitter").addEventListener("click",  function () {
   
  const inputVal = document.getElementById("search").value
  fetch(`https://rest.bandsintown.com/artists/${inputVal}/events/?app_id=2b86392a65721cdf3698bf18d6bfba28`)
    .then(function (response) {
        return response.json()
    
    }).then(function (json) {
    
      console.log(json)
      
      var bandNameelm = document.querySelector(".bandName")
      bandNameelm.innerHTML = inputVal
        
        var events = json
        var eventsModal = document.querySelector(".view-content")

        for (var i = 0; i < events.length; i++) {
          var event = events[i]
          
          var venue = event.venue.name
          
            var day = event.datetime.slice(8, 10)
            var month = event.datetime.slice(5, 7)
            var city = event.venue.city
            var country = event.venue.country
            
            var ticketurl = event.offers[0].url
          var eventDiv = `<div class="ds-3col-equal node node--event views-row views-row-17 views-row-odd view-mode-summary  node--summary node--event--summary clearfix bolero-analytics-processed">

            <div class="group-left ds-region ">
              <div class="field field--name-asf-events-small-date field--type-ds field--label-hidden stacked">
                <div class="field__items">
                  <div class="field__item"><span class="month">${month}</span><span  class="day">${day}</span></div>
                </div>
              </div>
            </div>
            
            <div class="group-middle ds-region ">
              <div class="field field--name-asf-events-city field--type-ds field--label-hidden">
                <div class="field__items">
                  <div class="field__item"><a><span class="locality">${city},</span>&nbsp;<span class="area">${country}</span></a></div>
                </div>
              </div>
              <div class="field field--name-asf-events-venue-title field--type-ds field--label-hidden ">
                <div class="field__items">
                  <div class="field__item"><a class="customer">${venue}</a></div>
                </div>
              </div>
              <div class="field field--name-asf-events-tickets field--type-ds field--label-hidden">
                <div class="field__items">
                  <div class="field__item"><a href=${ticketurl} target="_blank" class="button tickets">Tickets</a></div>
                </div>
              </div>
            </div>
            
            <div class="group-right ds-region ">
            </div>
            
            </div>`
            eventsModal.innerHTML += eventDiv

           
        }
    })
    

    

})



