import Head from 'preact-head'
import {h} from 'preact'
import config from '../config'
export default ({ children, user, title = 'AdminLTE 2 | Dashboard' ,staticFileDir = config.staticFileDir}) => (
    <div>
        <Head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>{title}</title>

            {/* <!-- Tell the browser to be responsive to screen width --> */}
            <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
            {/* <!-- Bootstrap 3.3.7 --> */}
            <link rel="stylesheet" href={staticFileDir + "/components/bootstrap/dist/css/bootstrap.min.css"}  />
            {/* <!-- Font Awesome --> */}
            <link rel="stylesheet" href={staticFileDir + "/components/font-awesome/css/font-awesome.min.css"} />
            {/* <!-- Ionicons --> */}
            <link rel="stylesheet" href={staticFileDir + "/components/Ionicons/css/ionicons.min.css"} />

            {/* <!-- Morris chart --> */}
            <link rel="stylesheet" href={staticFileDir + "/components/morris.js/morris.css"} />
            {/* <!-- jvectormap --> */}
            <link rel="stylesheet" href={staticFileDir + "/components/jvectormap/jquery-jvectormap.css"} />
            {/* <!-- Date Picker --> */}
            <link rel="stylesheet" href={staticFileDir + "/components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"} />
            {/* <!-- Daterange picker --> */}
            <link rel="stylesheet" href={staticFileDir + "/components/bootstrap-daterangepicker/daterangepicker.css"} />
            {/* <!-- bootstrap wysihtml5 - text editor --> */}
            <link rel="stylesheet" href={staticFileDir + "/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"} />

            {/* <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
                <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
                <!--[if lt IE 9]> */}
            {/* <script src={staticFileDir + "/shiv/html5shiv.min.js"></script>
            <script src={staticFileDir + "/shiv/respond.min.js"></script> */}
            {/* <![endif]-->

                <!-- Google Font --> */}
            <link rel="stylesheet" href={staticFileDir + "/plugins/bootstrap-slider/slider.css"} />
            <link rel="stylesheet" href={staticFileDir + "/fonts/SansPro.css"} />
            <link rel="stylesheet" href={staticFileDir + "/css/AdminLTE.css"} />
            <link rel="stylesheet" href={staticFileDir + "/css/style.less"} />
        </Head>

        <div>
            {children}
        </div>
  
        <div >
              {/* <!-- Morris chart - Sales --> */}
              <div  id="revenue-chart" ></div>
              <div id="sales-chart" ></div>
            </div>
        {/* <!-- jQuery 3 --> */}
        <script src={staticFileDir + "/components/jquery/dist/jquery.min.js"}></script>
        {/* <script src={staticFileDir + "/components/jquery-ui/jquery-ui.js"}></script> */}
        {/* <!-- jQuery UI 1.11.4 --> */}
        
        {/* <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip --> */}
        {/* <script>
            $.widget.bridge('uibutton', $.ui.button);
        </script> */}
        {/* <!-- Bootstrap 3.3.7 --> */}
        <script src={staticFileDir + "/components/bootstrap/dist/js/bootstrap.min.js"}></script>
        {/* <!-- Morris.js charts --> */}
        {/* <script src={staticFileDir + "/components/raphael/raphael.min.js"}></script> */}
        {/* <script src={staticFileDir + "/components/morris.js/morris.min.js"}></script> */}
        {/* <!-- Sparkline --> */}
        {/* <script src={staticFileDir + "/components/jquery-sparkline/dist/jquery.sparkline.min.js"}></script> */}
        {/* <!-- jvectormap --> */}
        {/* <script src={staticFileDir + "/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"}></script> */}
        {/* <script src={staticFileDir + "/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"}></script> */}
        {/* <!-- jQuery Knob Chart --> */}
        {/* <script src={staticFileDir + "/components/jquery-knob/dist/jquery.knob.min.js"}></script> */}
        {/* <!-- daterangepicker --> */}
        {/* <script src={staticFileDir + "/components/moment/min/moment.min.js"}></script> */}
        {/* <script src={staticFileDir + "/components/bootstrap-daterangepicker/daterangepicker.js"}></script> */}
        {/* <!-- datepicker --> */}
        {/* <script src={staticFileDir + "/components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"}></script> */}
        {/* <!-- Bootstrap WYSIHTML5 --> */}
        {/* <script src={staticFileDir + "/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"}></script> */}
        {/* <!-- Slimscroll --> */}
        {/* <script src={staticFileDir + "/components/jquery-slimscroll/jquery.slimscroll.min.js"}></script> */}
        {/* <!-- FastClick --> */}
        {/* <script src={staticFileDir + "/components/fastclick/lib/fastclick.js"}></script> */}
        {/* <!-- AdminLTE App --> */}
        {/* <script src={staticFileDir + "/js/adminlte.js"}></script> */}
        {/* <!-- AdminLTE dashboard demo (This is only for demo purposes) --> */}
        {/* <script src={staticFileDir + "/js/pages/dashboard.js"></script> */}
        {/* <!-- AdminLTE for demo purposes --> */}
        {/* <script src={staticFileDir + "/js/demo.js"}></script> */}
        {/* <!-- Bootstrap slider --> */}
        <script src={staticFileDir + "/plugins/bootstrap-slider/bootstrap-slider.js"}></script>
        {/* <script src={staticFileDir + "/plugins/bootstrap-slider/bootstrap-slider-start.js"}></script> */}
        <script src={staticFileDir + "/bower_components/select2/dist/js/select2.js"}></script>
    </div>
)
