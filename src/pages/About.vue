<template>
    <div>
        <Navbar />

        <section class="About">

            <h1 class="heading"> Repair <span>Assistant Plug-in</span> </h1>

            <div class="row">

                <div class="info-container">

                    <h1>What's new?</h1>

                    <div class="box-container">

                        <div class="box">
                            <h3> <span>May we assist you?</span></h3>
                            <h3> <span>[ Elements + Standard + Advanced ] </span></h3>
                            <p> If you are new to audio repair, or you just want to save time, try the new Repair Assistant Plug-in, which uses machine learning to find and fix audio issues quickly without leaving your DAW. The Assistant automatically recognizes specific problems and intelligently proposes a repair chain that you can modify to your liking with easy-to-use dials. More than just an upgrade of the previous Repair Assistant, this plug-in was built from the ground up.</p>
                        </div>

                    </div>

                    <div class="image">
                        <img src="images/rx10-webtour-spectral-recovery.png" alt="Rx10 Spectral Recovery" class="center">
                    </div>

                </div>

            </div>

        </section>

        <!-- about section ends -->

        <!-- skills section starts  -->

        <section class="skills">

            <h1 class="heading"> <span>Other</span> enhancements in RX10</h1>

            <div class="box-container">
                <div class="box">
                    <img src="images/icon-1.png">
                    <h3>First time user Experiences</h3>
                    <p>RX is complex. That's why we added the First Time User Experience, an interactive tour to guide you through the software.</p>
                </div>
                <div class="box">
                    <img src="images/icon-2.png">
                    <h3>Selection Feathering</h3>
                    <p>Make smoother edits with improved Selection Feathering, which now also works in the frequency domain.</p>
                </div>
                <div class="box">
                    <img src="images/icon-3.png">
                    <h3>Native M1 Support</h3>
                    <p>Supported on Intel Macs & Apple silicon Macs (Apple M1 chips) in Rosetta 2 and native.</p>
                </div>
            </div>

        </section>

        <!-- skills section ends -->

    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  }
  ;
</script>

<style>
</style>