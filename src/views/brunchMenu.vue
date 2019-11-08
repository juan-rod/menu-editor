<template>
<div class="wrapper" style="display:flex;flex-direction:column;justify-content:center;align-items:center;">
  <button @click="printMe" style="color:white; border:1px solid white;padding:2em; margin-bottom:20px">print</button>
  <div id="nodeToRenderAsPDF" class="brunch-menu bootys-menu" size="A4">
    <div class="bootys-menu-header">
      <div class="bootys-menu-header-top-border">
        <div class="dashes">
          <span>\</span>
          <span>\</span>
          <span>\</span>
          <span>\</span>
          <span>\</span>
          <span>\</span>
          <span>\</span>
          <span>\</span>
          <span>\</span>
          <span>\</span>
        </div>
        <div class="middle-box"></div>
        <div class="dashes">
          <span>/</span>
          <span>/</span>
          <span>/</span>
          <span>/</span>
          <span>/</span>
          <span>/</span>
          <span>/</span>
          <span>/</span>
          <span>/</span>
          <span>/</span>
        </div>
      </div>
    </div>
    <div class="bootys-menu-type">
      <div class="bootys-menu-type-container">
        <p>Brunch</p>
      </div>
    </div>
    <div class="bootys-menu-body brunch-body">
      <div id="item1" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>Tortilla Española</p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>farm eggs, vinegar onions, potatoes, mojo picon</p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>9</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item2" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>Maduros con Queso</p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>fried sweet Plantains, Queso Fresco, Cilantro, TX EVOO, Lime Spice</p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item3" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>BEC S/P </p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>bacon, egg, cheese, salt, pepper</p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>8</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item4" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>Pancakes</p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>fluffy cakes of joy, local fruit, salted butter, infused honey</p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item5" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>French Toast Sticks</p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>fig leaf sugar, agave nectar whipped cream </p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item6" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>Cinnamon Churros</p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>Cinnamon Donuts, Chocolate Dip, Cinnamon Sugar (vanilla ice cream +2) </p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item7" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>Fried Chicken</p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>fermented rice batter, local honey, rooftop garden herbs</p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item8" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>Hot Dog</p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>post oak red hot, mustard, tomato, onion, sport pepper, relish, celery salt</p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item9" class="menu-item-card">
        <div class="menu-item-wrapper">
          <div class="menu-item-header brunch">
            <div class="brunch-menu-item-body">
              <div class="brunch-menu-item-title" >
                <p>Add an Egg</p>
              </div>
              <div class="brunch-menu-item-description" >
                <p>add any style egg to a dish</p>
              </div>
            </div>
            <div class="brunch-menu-item-price">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bootys-menu-footer">
      <img src="" alt="">
    </div> -->
  </div>
</div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export default {
  mounted () {
    var scale = "Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio
    console.log('scale', scale)
    var sx = document.querySelector('#nodeToRenderAsPDF').offsetHeight
    console.log('sx', sx)
  },
  methods: {
    printMe () {
      const filename  = 'brunch_menu.pdf';

      html2canvas(document.querySelector('#nodeToRenderAsPDF'),{ scale: 4 }).then(canvas => {
        console.log('canvas', canvas)
        console.log('canvas.toDataURL("image/png")', canvas.toDataURL('image/png'))
        let pdf = new jsPDF('p', 'mm', 'a4');
        console.log('pdf', pdf)
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
      });
    }
  }
}
</script>

<style>

</style>