(function(){
    function Start()
    {
        console.log('Connection Succesful, Welcome.');

        // Adding delete button query
        let deleteButtons = document.querySelectorAll('.btn-danger')
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=> {
                if(!confirm('Are you sure you wish to procede?'))
                {
                    event.preventDefault();
                    window.location.assign('/work')
                }
            })
        }
    }
    window.addEventListener('load', Start);
})();