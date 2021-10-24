$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.closed__nav').toggleClass('clicked')
        $('#mobile__dropdown').slideToggle()
    })
    var wow = new WOW();
    wow.init();

    setTimeout(() => {
    }, 3000);
    setTimeout(() => {
        $("#page__loader").fadeOut()
        $("body").removeClass('overflow-hidden');   
    }, 5000);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 240) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    var mobileLinks = $('.mobile__link')
    
    for (const link of mobileLinks) {
        $(link).click(function(e){
            $('.hamburger').trigger('click')
        }) 
    }
    
    $('.roadmap-carousel').slick({
        prevArrow: $('.roadmap__prev'),
        nextArrow: $('.roadmap__next'),
    });
    var btnBelow = $('.roadmap__btn__below')

    for (const controller of btnBelow) {
        $(controller).click(function(e){
            $('html,body').animate({
                scrollTop: $("#roadmap-carousel").offset().top},
            'fast');
        }) 
    }

    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_dark);
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        var chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        
        chart.data = [
          {
            description: "LIQUIDTY",
            value: tokenPercentageCalculator(20)
          },
          {
            description: "STAKING",
            value: tokenPercentageCalculator(20)
          },
          {
            description: "AIRDROP",
            value: tokenPercentageCalculator(45)
          },
          {
            description: "TEAM",
            value: tokenPercentageCalculator(10)
          },
          {
            description: "MARKETING",
            value: tokenPercentageCalculator(5)
          },
        ];
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;  
        
        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "description";
        
        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;
        
        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;
        
        chart.legend = new am4charts.Legend();
        
    });

    function tokenPercentageCalculator(percent) {
      let totalSupply = 1000000;
      return (percent / 100) * totalSupply
    }
})