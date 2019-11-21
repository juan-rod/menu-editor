import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export function printMenu  () {
  const today = getDate()
  const random = getRandomInt(0, 2000)
  const filename  = `brunch_menu_${random}_${today}.pdf`;

  const pageToPrint = document.querySelector('#nodeToRenderAsPDF')
  // this crashes the browser...
  // getPageSize(pageToPrint)
  
  html2canvas(pageToPrint,{ scale: 4 }).then(canvas => {
    let pdf = new jsPDF('p', 'cm', 'a4')

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 2.73, 0, 15.53, 29.7)
    pdf.save(filename);
  });
}
const getPageSize = (pageToPrint) =>{
      let pageToPrintWidth = pageToPrint.clientWidth
      let pageToPrintHeight = pageToPrint.clientHeight
      pageToPrintWidth = (pageToPrintWidth * 2.54) / 96
      pageToPrintHeight = (pageToPrintHeight * 2.54) / 96
      console.log('1. pageToPrintWidth', pageToPrintWidth)
      console.log('pageToPrintHeight', pageToPrintHeight)
      pageToPrintWidth = pageToPrintWidth * 3
      pageToPrintHeight = pageToPrintHeight * 3
      console.log('2. pageToPrintWidth', pageToPrintWidth)
      console.log('pageToPrintHeight', pageToPrintHeight)
      pageToPrint.style.height = `${pageToPrintHeight}cm`
      pageToPrint.style.width = `${pageToPrintWidth}cm`
}
const getDate = () => {
  return new Date().toISOString().slice(0, 10)
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// width: 15.53cm;
//       // width: 21.0cm;
//       height: 29.7cm;