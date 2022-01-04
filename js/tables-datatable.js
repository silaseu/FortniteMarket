$(function() {
    $('#myTable').DataTable({
        "order": [
            [3, "desc"]
        ],
        "aLengthMenu": [
            [5, 10, 20, -1],
            [5, 10, 20, "All"]
        ],
        "iDisplayLength": 5
    });

    $('#userTable').DataTable({
        "order": [
            [0, "desc"]
        ],
        "aLengthMenu": [
            [10, 15, 20, -1],
            [10, 15, 20, "All"]
        ],
        "iDisplayLength": 10
    });


    $('#youtubeTable').DataTable({
        "order": [
            [0, "desc"]
        ],
        "aLengthMenu": [
            [15, 20, 25, -1],
            [15, 20, 25, "All"]
        ],
        "iDisplayLength": 15
    });


    $('#rankList').DataTable({
        "aLengthMenu": [
            [15, 20, 25, -1],
            [15, 20, 25, "All"]
        ],
        "iDisplayLength": 15
    });


    $('#marketTable').DataTable({
        "bSort": false,
        "aLengthMenu": [
            [30, 60, 90, -1],
            [30, 60, 90, "All"]
        ],
        "iDisplayLength": 30
    });

    $(document).on('sidebarChanged', function() {
        dataTable.columns.adjust();
        dataTable.responsive.recalc();
        dataTable.responsive.rebuild();
    });

});