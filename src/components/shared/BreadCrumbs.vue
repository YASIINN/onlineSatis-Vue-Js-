
<template>
    <div class="row page-titles">
                    <div class="col-md-5 col-8 align-self-center">
                        <h3 class="text-themecolor">{{$store.getters.getbreadcrumbtitle}}</h3>

                        <ol class="breadcrumb">
                            <li class=""><a>{{$store.getters.getbreadcrumbmainpage}}</a></li>
                            <p style="padding-left:5px; padding-right:5px;font-size:16px; font-weight:bold"> > </p>

                            <li class="">{{$store.getters.getbreadcrumbsubpage}}</li>
                        </ol>
                    </div>
                    <div class="col-md-7 col-4 align-self-center">
                        <div class="d-flex m-t-10 justify-content-end">
                            <div class="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div class="chart-text m-r-10">
                                    <h6 class="m-b-0"><small>Test</small></h6>
                                </div>
                                <div class="spark-chart">
                                    <div id="monthchart"></div>
                                </div>
                            </div>
                            <div class="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div class="chart-text m-r-10">
                                    <h6 class="m-b-0"><small>test 2</small></h6>
                                </div>
                                <div class="spark-chart">
                                    <div id="lastmonthchart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
