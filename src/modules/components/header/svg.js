class Svg {
  getSvgInst() {
    return `
                  <svg class="svg" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <mask class="a" id="a">
                     <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M23 2.8H7A4.2 4.2 0 0 0 2.8 7v16A4.2 4.2 0 0 0 7 27.2h16a4.2 4.2 0 0 0 4.2-4.2V7A4.2 4.2 0 0 0 23 2.8ZM7 0a7 7 0 0 0-7 7v16a7 7 0 0 0 7 7h16a7 7 0 0 0 7-7V7a7 7 0 0              0-7-7H7Zm8 20.2a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Zm0 2.8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm8-14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                     />
                   </mask>
                   <path
                      class="b"
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M23 2.8H7A4.2 4.2 0 0 0 2.8 7v16A4.2 4.2 0 0 0 7 27.2h16a4.2 4.2 0 0 0 4.2-4.2V7A4.2 4.2 0 0 0 23 2.8ZM7 0a7 7 0 0 0-7 7v16a7 7 0 0 0 7 7h16a7 7 0 0 0 7-7V7a7 7 0 0              0-7-7H7Zm8 20.2a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Zm0 2.8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm8-14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                    />
                   <path
                     class="d"
                     d="M7 3.8h16v-2H7v2ZM3.8 7A3.2 3.2 0 0 1 7 3.8v-2A5.2 5.2 0 0 0 1.8 7h2Zm0 16V7h-2v16h2ZM7 26.2A3.2 3.2 0 0 1 3.8 23h-2A5.2 5.2 0 0 0 7 28.2v-2Zm16 0H7v2h16v-2Zm3.2-3.2a3.2 3.            2 0 0 1-3.2 3.2v2a5.2 5.2 0 0 0 5.2-5.2h-2Zm0-16v16h2V7h-2ZM23 3.8A3.2 3.2 0 0 1 26.2 7h2A5.2 5.2 0 0 0 23 1.8v2ZM1 7a6 6 0 0 1 6-6v-2a8 8 0 0 0-8 8h2Zm0 16V7h-2v16h2Zm6 6a6             6 0 0 1-6-6h-2a8 8 0 0 0 8 8v-2Zm16 0H7v2h16v-2Zm6-6a6 6 0 0 1-6 6v2a8 8 0 0 0 8-8h-2Zm0-16v16h2V7h-2Zm-6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2ZM7 1h16v-2H7v2Zm12.2 14a4.2 4.2 0           0 1-4.2 4.2v2a6.2 6.2 0 0 0 6.2-6.2h-2ZM15 10.8a4.2 4.2 0 0 1 4.2 4.2h2A6.2 6.2 0 0 0 15 8.8v2ZM10.8 15a4.2 4.2 0 0 1 4.2-4.2v-2A6.2 6.2 0 0 0 8.8 15h2Zm4.2 4.2a4.2 4.2 0 0              1-4.2-4.2h-2a6.2 6.2 0 0 0 6.2 6.2v-2Zm7-4.2a7 7 0 0 1-7 7v2a9 9 0 0 0 9-9h-2Zm-7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Zm-7 7a7 7 0 0 1 7-7V6a9 9 0 0 0-9 9h2Zm7 7a7 7 0 0            1-7-7H6a9 9 0 0 0 9 9v-2Zm9-15a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm-1 1a1 1 0 0 1 1-1V4a3 3 0 0 0-3 3h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3           3V8Z"
                     mask="url(#a)"
                   />
                  </svg>
    `;
  }
}
export default Svg;
