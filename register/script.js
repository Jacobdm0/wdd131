let count=1;
function participantTemplate(count) {
    return `
    <section class="participant${count}">
                        <p>Participant ${count}</p>
                        <div class="item">
                            <label for="fname"> First Name<span>*</span></label>
                            <input id="fname${count}" type="text" name="fname" value
                                required />
                        </div>
                        <div class="item activities">
                            <label for="activity">Activity
                                #<span>*</span></label>
                            <input id="activity${count}" type="text" name="activity" />
                        </div>
                        <div class="item">
                            <label for="fee">Fee ($)<span>*</span></label>
                            <input id="fee${count}" type="number" name="fee" />
                        </div>
                        <div class="item">
                            <label for="date">Desired Date
                                <span>*</span></label>
                            <input id="date${count}" type="date" name="date" />
                        </div>
                        <div class="item">
                            <p>Grade</p>
                            <label for="grade">Grade<span>*</span></label>
                            <select id="grade${count}" name="grade">
                                <option selected value disabled
                                    selected></option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                                <option value="3">3rd</option>
                                <option value="4">4th</option>
                                <option value="5">5th</option>
                                <option value="6">6th</option>
                                <option value="7">7th</option>
                                <option value="8">8th</option>
                                <option value="9">9th</option>
                                <option value="10">10th</option>
                                <option value="11">11th</option>
                                <option value="12">12th</option>
                            </select>
                        </div>
                    </section>`;
}
addButton = document.getElementById('add${count}');
addButton.insertAdjacentHTML('beforebegin', ``);

// Add event listener for addButton
addButton.addEventListener('click', function() {
    // Your event handler code here
    count += 1;
    addButton.insertAdjacentHTML('beforebegin', `${participantTemplate(count)}`);
});



function successTemplate(info) {
    
    return `Thank you ${info[2]} for registering. You have registered ${info[0]} participant(s) and owe $${info[1]} in Fees`;
}
function submitForm(event){
    event.preventDefault();
    const feeTotal=totalFees();
    adultName=document.getElementById("adult_name").innerText;
    formA=document.getElementById("coolform");
    formA.style.display = "none";
    const regInfo=[count,feeTotal,adultName];
    successText=successTemplate(regInfo);
    document.getElementById("summary").innerHTML=successText;
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    let total=0;
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    const ElementsArray = [...feeElements];
    // console.log(ElementsArray[0].value);
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    for (i = 0; i < ElementsArray.length; i++) {
        total += ElementsArray[i];
        // once you have your total make sure to return it!
        total += parseFloat(ElementsArray[i].value) || 0;
        }
        return total;
    }



formSubmit = document.getElementById('submitButton');
if (formSubmit) {
    formSubmit.addEventListener('click', submitForm);
} else {
    console.error('submitButton not found');
}