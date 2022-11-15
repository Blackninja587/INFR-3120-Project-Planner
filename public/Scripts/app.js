// Creating variables before calling them
let button;
(function(){
    function Start()
    {
        console.log('Connection Succesful,', ' Welcome to my web-page');

        // Adding delete button query
        let deleteButtons = document.querySelectorAll('.btn-danger')
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=> {
                if(confirm('Are you sure you wish to procede?')) 
                {
                    alert('Selection Deleted');
                    window.location.assign('/work')
                }
                else
                {
                    event.preventDefault();
                    alert('Deletion Cancelled');
                    window.location.assign('/work')
                }
            })
        }
    }
    window.addEventListener('load', Start);
})();