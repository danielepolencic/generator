module.exports = `
.flex { display: flex; }
.inline-flex { display: inline-flex; }


.flex-auto {
  flex: 1 1 auto;
  min-width: 0; 
  min-height: 0; 
}

.flex-none { flex: none; }

.flex-column  { flex-direction: column; }
.flex-row     { flex-direction: row; }
.flex-wrap    { flex-wrap: wrap; }
.flex-nowrap    { flex-wrap: nowrap; }
.flex-wrap-reverse    { flex-wrap: wrap-reverse; }
.flex-column-reverse  { flex-direction: column-reverse; }
.flex-row-reverse     { flex-direction: row-reverse; }

.items-start    { align-items: flex-start; }
.items-end      { align-items: flex-end; }
.items-center   { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch  { align-items: stretch; }

.self-start    { align-self: flex-start; }
.self-end      { align-self: flex-end; }
.self-center   { align-self: center; }
.self-baseline { align-self: baseline; }
.self-stretch  { align-self: stretch; }

.justify-start   { justify-content: flex-start; }
.justify-end     { justify-content: flex-end; }
.justify-center  { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around  { justify-content: space-around; }

.content-start   { align-content: flex-start; }
.content-end     { align-content: flex-end; }
.content-center  { align-content: center; }
.content-between { align-content: space-between; }
.content-around  { align-content: space-around; }
.content-stretch { align-content: stretch; }

.order-0 { order: 0; }
.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }
.order-4 { order: 4; }
.order-5 { order: 5; }
.order-6 { order: 6; }
.order-7 { order: 7; }
.order-8 { order: 8; }
.order-last { order: 99999; }
`