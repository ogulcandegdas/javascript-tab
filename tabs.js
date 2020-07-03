
css = `.tabs{
            list-style: none;
            margin: 0;
            padding: 0;
            border-bottom: 1px solid #dee2e6;
            margin-bottom: 1rem;
            display: flex;
        }
        .tabs li a{
            padding: 5px 10px;
            display: block;
        }
        .tabs li{margin-bottom: -1px;}
        .tabs a.active{
            color: #495057;
            background-color: #fff;
            border-color: #dee2e6 #dee2e6 #fff;
        }
        .tab-content{
            clear: both;
        }
        .tab-content > div{display: none;}`;

$('head').append('<style>'+css+'</style>');

$('.tabs a').click(function (e) {
	e.preventDefault()
	$('.tabs a').removeClass('active');
	$('.tab-content > div').hide();
	$(this).addClass('active');
	$($(this).attr('href')).show();
});