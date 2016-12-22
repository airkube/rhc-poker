$(document).ready(function() {

		$('#calendar').fullCalendar({
			theme: true,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'listYear,month,agendaWeek'
			},
			buttonText: {
				today:    "Aujourd'hui",
				month:    'Mois',
				week:     'Semaine',
				day:      'day',
				list:     'Liste des tournois'
			},
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Tournoi n°1',
					color: 'red',
					start: '2016-12-01'
				},
				{
					title: '3 jours de tournois, on est chaud !!!',
					start: '2016-12-07',
					end: '2016-12-10'
				},
				{
					title: 'Date géniale !!!',
					start: '2016-12-28'
				},
				{
					title: 'Tournois n°1 2017',
					start: '2017-01-07'
				},
				{
					title: 'World Series',
					start: '2017-03-13'
				}
			],
			eventClick: function(event) {
				
					 $('<div>').dialog({
						modal: true,
						open: function ()
						{
							$(this).load('inscription.html');
						},         
						height: 400,
						width: 400,
						title: 'Dynamically Loaded Page'
					});
					return false;
				
			}
		});
		
	});