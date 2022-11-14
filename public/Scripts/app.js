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
                if(!confirm('Are you sure you wish to procede?'))
                {
                    event.preventDefault();
                    alert('Selection has been deleted');
                    window.location.assign('/work')
                }
            })
        }
    }
    window.addEventListener('load', Start);
})();