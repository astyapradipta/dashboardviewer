// Initialize the viz variable 
var vizMedicareIP01, vizMedicareOP01, vizSacPoliceDispatch, vizlpg;

window.onload= function() {
// When the webpage has loaded, load the viz

	var placeholder01 = document.getElementById('PKH');
	//var vizURL01 = 'https://public.tableau.com/views/MedicareChargeProject_0/IPChargeDashboard';
	var vizURL01 = 'https://public.tableau.com/views/PMK_15585766930260/DashboardPKH?:embed=y&:display_count=yes&:origin=viz_share_link';	
	var options01 = {
	    width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizMedicareIP01 = new tableau.Viz(placeholder01, vizURL01, options01);

	// Listen for filter change/selection for "Medicare Inpatient Charge Analysis 01"
	vizMedicareIP01.addEventListener('filterchange', function(filterEvent) {

		//console.log('Event Listener Activated.'); //Debug code

		var arrayFilterList = [];
		filterEvent.getFilterAsync().then( function(field){
			var field_name = field.getFieldName();
			var field_type = field.getFilterType();
			if (field_name == "Provider State") {
				var data_values = field.getAppliedValues();
				for (i = 0; i < data_values.length; i++) {
					var selectedFilterSingle = data_values[i].value;
					
					// Array manipulation: Concatenate multiple filter values into the array
					arrayFilterList.push(selectedFilterSingle);
				}
			}
			console.log(arrayFilterList);

			// Cross-filter: Apply "Provider State" filter criteria to "Medicare Outpatient Charge Analysis 01"
			// with single mark or multiple marks
			setFilterTo(vizMedicareOP01, 'OP Map', 'Provider State', arrayFilterList);			
		});
	});
	
    var placeholder02 = document.getElementById('palu');
    var vizURL02 = 'https://public.tableau.com/views/PALU/PALU?:embed=y&:display_count=yes&:origin=viz_share_link';
    var options02 = {
    	width: '1280px',
    	height: '720px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizMedicareOP01 = new tableau.Viz(placeholder02, vizURL02, options02);

	// Listen for filter change/selection for "Medicare Outpatient Charge Analysis 01"
	vizMedicareOP01.addEventListener('filterchange', function(filterEvent) {

		//console.log('Event Listener Activated.'); //Debug code

		var arrayFilterList = [];
		filterEvent.getFilterAsync().then( function(field){
			var field_name = field.getFieldName();
			var field_type = field.getFilterType();
			if (field_name == "Provider State") {
				var data_values = field.getAppliedValues();
				for (i = 0; i < data_values.length; i++) {
					var selectedFilterSingle = data_values[i].value;
					
					// Array manipulation: Concatenate multiple filter values into the array
					arrayFilterList.push(selectedFilterSingle);
				}
			}
			console.log(arrayFilterList);

			// Cross-filter: Apply "Provider State" filter criteria to "Medicare Inpatient Charge Analysis 01"
			// with single mark or multiple marks
			setFilterTo(vizMedicareIP01, 'IP Map', 'Provider State', arrayFilterList);			
		});
	});
	
	var placeholder04 = document.getElementById('lpg');
	//var vizURL01 = 'https://public.tableau.com/views/MedicareChargeProject_0/IPChargeDashboard';
	var vizURL04 = 'https://public.tableau.com/views/dasborlpg3kgcontoh/halamanutama?:embed=y&:display_count=yes&:origin=viz_share_link';	
	var options04 = {
	    width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizlpg = new tableau.Viz(placeholder04, vizURL04, options04);

	// Listen for filter change/selection for "Medicare Inpatient Charge Analysis 01"
	vizlpg.addEventListener('filterchange', function(filterEvent) {

		//console.log('Event Listener Activated.'); //Debug code

		var arrayFilterList = [];
		filterEvent.getFilterAsync().then( function(field){
			var field_name = field.getFieldName();
			var field_type = field.getFilterType();
			if (field_name == "Provider State") {
				var data_values = field.getAppliedValues();
				for (i = 0; i < data_values.length; i++) {
					var selectedFilterSingle = data_values[i].value;
					
					// Array manipulation: Concatenate multiple filter values into the array
					arrayFilterList.push(selectedFilterSingle);
				}
			}
			console.log(arrayFilterList);

			// Cross-filter: Apply "Provider State" filter criteria to "Medicare Outpatient Charge Analysis 01"
			// with single mark or multiple marks
			setFilterTo(vizlpg, 'OP Map', 'Provider State', arrayFilterList);			
		});
	});
	
    var placeholder03 = document.getElementById('indonesia');
    var vizURL03 = 'https://public.tableau.com/views/IndonesiasHistoricalEarthquakes/Earthquake?:embed=y&:display_count=yes&:origin=viz_share_link';
    var options03 = {
    	width: '1280px',
    	height: '720px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizSacPoliceDispatch = new tableau.Viz(placeholder03, vizURL03, options03);

};


// Filter the specified dimension to the specified value(s)
function setFilterTo(vizName, sheetName, filterName, values) {
	var sheet = vizName.getWorkbook().getActiveSheet().getWorksheets().get(sheetName);
    sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE); 
}


//function switchView(sheetName) {
//	var workbook = vizMedicareOP01.getWorkbook();
//	workbook.activateSheetAsync(sheetName);
//}

// Filter the specified dimension to the specified value(s)
//function show(filterName, values) {
//	var sheet = vizMedicareOP01.getWorkbook().getActiveSheet();
//	sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
//}

// Select the marks that have the specified value(s) for the specified dimension
//function selectMarks(filterName, values) {
//	var sheet = vizMedicareOP01.getWorkbook().getActiveSheet();
//	sheet.selectMarksAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
//}
