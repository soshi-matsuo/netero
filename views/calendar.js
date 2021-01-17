// TODO: review design(use module or not?) 
document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { // this object will be "parsed" into an Event Object
                title: 'Done!', // a property!
                start: '2021-01-01', // a property!
                display: 'background',
                // end: '2021-01-10' // a property! ** see important note below about 'end' **
            }
        ]
    });
    calendar.render();
});
