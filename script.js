function updateTotals() {
        // Left Table Totals
        const qtyInputs = document.querySelectorAll(".qty");
        const rateInputs = document.querySelectorAll(".rate");
        const totalSpans = document.querySelectorAll(".total");

        let topQty = 0,
          topRate = 0,
          topTotal = 0;
        let bottomQty = 0,
          bottomRate = 0,
          bottomTotal = 0;

        qtyInputs.forEach((qty, i) => {
          const rate = rateInputs[i];
          const totalSpan = totalSpans[i];

          const q = parseFloat(qty.value) || 0;
          const r = parseFloat(rate.value) || 0;
          const total = q * r;

          totalSpan.textContent = total.toFixed(2);

          if (i < 3) {
            topQty += q;
            topRate += r;
            topTotal += total;
          } else {
            bottomQty += q;
            bottomRate += r;
            bottomTotal += total;
          }
        });

        document.getElementById("topQtyTotal").textContent = topQty.toFixed(2);
        document.getElementById("topRateTotal").textContent =
          topRate.toFixed(2);
        document.getElementById("topSectionTotal").textContent =
          topTotal.toFixed(2);
          
        document.getElementById("bottomQtyTotal").textContent =
          bottomQty.toFixed(2);
        document.getElementById("bottomRateTotal").textContent =
          bottomRate.toFixed(2);
        document.getElementById("bottomSectionTotal").textContent =
          bottomTotal.toFixed(2);

        const grand = topTotal + bottomTotal;
        document.getElementById("grandTotal").textContent = grand.toFixed(2);

        // એફિસે જમા કરાવેલ ટાટલ નંગ

        const qty3Inputs = document.querySelectorAll(".qty3");
        let grand3 = 0;

        qty3Inputs.forEach((qty) => {
          const q = parseFloat(qty.value) || 0;
          grand3 += q;
        });

        document.getElementById("grandTotal3").textContent = grand3.toFixed(2);
//
        
function calculateTable(prefix) {
  const qtys = document.querySelectorAll("." + prefix + "-qty");
  const rates = document.querySelectorAll("." + prefix + "-rate");
  const totals = document.querySelectorAll("." + prefix + "-total");
  let grand = 0;

  qtys.forEach((qty, i) => {
    const q = parseFloat(qty.value) || 0;
    const r = parseFloat(rates[i].value) || 0;
    const rowTotal = q * r;
    totals[i].textContent = rowTotal;   // show number directly
    grand += rowTotal;
  });

  document.getElementById(prefix + "-grand").textContent = grand;
  return grand;
}

function calculateAll() {
  const totalB1 = calculateTable("b1"); // અપાયેલા (જાવક)
  const totalB2 = calculateTable("b2"); // લાવેલા (આવક)

  // Update આવક અને જાવક
  document.getElementById("આવક").textContent = totalB2;
  document.getElementById("જાવક").textContent = totalB1;

  // Profit / Loss
  const result = totalB2 - totalB1;
  const resultCell = document.getElementById("b2-result");
  resultCell.textContent = result;

  // રંગ બદલવા
  if (result > 0) {
    resultCell.style.color = "green";
  } else if (result < 0) {
    resultCell.style.color = "red";
  } else {
    resultCell.style.color = "black";
  }
}

// Attach listeners
document.querySelectorAll("input").forEach(inp => {
  inp.addEventListener("input", calculateAll);
});

// Run once at start
calculateAll();

        // Right Table-1
        const qtyvInputs = document.querySelectorAll(".qtyv");
        const ratevInputs = document.querySelectorAll(".rateV");
        const total2Spans = document.querySelectorAll(".total-2");
        const percentSpans = document.querySelectorAll(".percent");

        let grand2 = 0;

        // Step 1: Calculate row totals and grand2
        qtyvInputs.forEach((qtyv, i) => {
          const ratev = ratevInputs[i];
          const totalSpan = total2Spans[i];

          const qv = parseFloat(qtyv.value) || 0;
          const rv = parseFloat(ratev.value) || 0;
          const total = qv * rv;

          totalSpan.textContent = total.toFixed(2);
          grand2 += total;
        });

        // Step 2: Show grand2
        document.getElementById("grandTotalR2").textContent = grand2.toFixed(2);

        // Step 3: Read grandTotal3 from page
        const grandTotal3 =
          parseFloat(document.getElementById("grandTotal3").textContent) || 0;

        // Step 4: Calculate percentages of each row based on grandTotal3
        let percentSum = 0;

        total2Spans.forEach((totalSpan, i) => {
          const rowTotal = parseFloat(totalSpan.textContent) || 0;
          let percent = 0;

          if (grandTotal3 > 0) {
            percent = rowTotal / grandTotal3;
          }

          percentSpans[i].textContent = percent.toFixed(2) + "%";
          percentSum += percent;
        });

        // Step 5: Show sum of percentages
        document.getElementById("percentTotal").textContent =
          percentSum.toFixed(2) + "%";


        // બનાવવાના અપાયેલા નંગ (રીપેરીંગ માટે)
const qty3 = document.querySelectorAll('.b3-qty');
const rate3 = document.querySelectorAll('.b3-rate');
const total3 = document.querySelectorAll('.b3-total');

let sum3 = 0;
qty3.forEach((q, i) => {
  const qty = parseFloat(q.value) || 0;
  const rate = parseFloat(rate3[i].value) || 0;
  const total = qty * rate;
  total3[i].textContent = total.toFixed(2);
  sum3 += total;
});

document.getElementById('b3-grand').textContent = sum3.toFixed(2);

 //<!-- Table R-4-->


 function calculateGrandTotalS() {
    let total = 0;
    const qtyInputs = document.querySelectorAll(".qtyS");

    qtyInputs.forEach(function (input) {
      const value = parseFloat(input.value) || 0; // ખાલી હોય તો 0 ગણાશે
      total += value;
    });

    document.getElementById("grandTotalS").textContent = total.toFixed(2); // 2 દશાંશ સુધી બતાવશે
  }

  // બધા qtyS ઇનપુટ પર ઈવેન્ટ લિસ્ટનર લગાવો
  document.querySelectorAll(".qtyS").forEach(function (input) {
    input.addEventListener("input", calculateGrandTotalS);


    //menejar

    function calculateSalaries() {
  const salaryInputs = document.querySelectorAll('.salary');
  const givenInputs = document.querySelectorAll('.givensalary');
  const percentSpans = document.querySelectorAll('.salarypercent');

  let totalSalary = 0;
  let totalGiven = 0;

  // read grandTotal3 from page
  const grandTotal3 = parseFloat(document.getElementById("grandTotal3")?.textContent) || 0;

  // Loop through each row
  for (let i = 0; i < salaryInputs.length; i++) {
    const salary = parseFloat(salaryInputs[i].value) || 0;
    const given = parseFloat(givenInputs[i].value) || 0;

    totalSalary += salary;
    totalGiven += given;

    // row wise percentage → given ÷ grandTotal3
    const percent = grandTotal3 !== 0 ? (given / grandTotal3) : 0;
    percentSpans[i].textContent = percent.toFixed(2) + "%";
  }

  // Show totals in last orange row
  document.getElementById("salary").textContent = totalSalary.toFixed(2);
  document.getElementById("givensalary").textContent = totalGiven.toFixed(2);

  // Final percentage total → totalGiven ÷ grandTotal3
  const totalPercent = grandTotal3 !== 0 ? (totalGiven / grandTotal3) : 0;
  document.getElementById("totalpercent").textContent = totalPercent.toFixed(2) + "%";

  // Show raw final % (without % sign) if needed
  document.getElementById("grandTotal2").textContent = totalPercent.toFixed(2);
}

// run on input change
document.addEventListener("input", calculateSalaries);


// Optional: run once on page load
window.addEventListener('DOMContentLoaded', calculateSalaries);
  // Page load પર પણ total ગણાવવું હોય તો uncomment કરો

  // calculateGrandTotalS();
  
   
     // Final 4 Calculations
const Total0 = grand3 !== 0 ? grand / grand3 : 0;
document.getElementById("Total0").textContent = Total0.toFixed(2);

// givensalary ÷ grand3 → TotaL1
const givensalary = parseFloat(document.getElementById("givensalary").textContent) || 0;
const TotaL1 = grand3 !== 0 ? givensalary / grand3 : 0;
document.getElementById("TotaL1").textContent = TotaL1.toFixed(2);

// grandTotal2 ÷ grand3 → TotaL2
const grandTotalR2 = parseFloat(document.getElementById("grandTotalR2").textContent) || 0;
const TotaL2 = grand3 !== 0 ? grandTotalR2 / grand3 : 0;
document.getElementById("TotaL2").textContent = TotaL2.toFixed(2);

// b2 ÷ grand3 → TotaL3
const b2 = parseFloat(document.getElementById("b2-result").textContent) || 0;
const TotaL3 = grand3 !== 0 ? b2 / grand3 : 0;
document.getElementById("TotaL3").textContent = TotaL3.toFixed(2);

// Final Grand Total (sum of all)
const finalGrand = Total0 + TotaL1 + TotaL2 + TotaL3;
document.getElementById("final-grand").textContent = finalGrand.toFixed(2);
  });
}


function table_to_book(table, name) {
  var workbook = XLSX.utils.book_new();
  var worksheet = XLSX.utils.table_to_sheet(table);
  XLSX.utils.book_append_sheet(workbook, worksheet, name);
  return workbook;
}

function saveToFile() {
  const tables = document.querySelectorAll("table");
  const workbook = XLSX.utils.book_new();

  tables.forEach((table, index) => {
    const sheetName = `Sheet${index + 1}`;
    const worksheet = XLSX.utils.table_to_sheet(table);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  });

  XLSX.writeFile(workbook, "report.xlsx");
}
      
      
// Auto update on input
document.addEventListener("input", updateTotals);
