let site = {
    initialize: function() {        
        site.setCurrentYear();
    },

    setCurrentYear: function() {
        const year = new Date().getFullYear();
        document.getElementById('year').textContent = year;
    }
}