/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const template = `
  <div #wrapper class="select-box">
    <div class="label" (click)="toggle()" [class.open]="open">
      <label [class.placeholder]="!label">
        {{ label ? label : placeholder }}
        <svg version="1.1" [attr.class]="open ? 'hide' : 'show'" id="icon-arrow-down" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="16px" height="16px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;"
          xml:space="preserve">
          <g>
            <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
              L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
              c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
              c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
          </g>
        </svg>
        <svg version="1.1" [attr.class]="open ? 'show' : 'hide'" id="icon-arrow-up" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="16px" height="16px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;"
          xml:space="preserve">
          <g>
            <path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
              C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
              c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
              c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
              C284.929,199.378,283.984,197.188,282.082,195.285z"/>
          </g>
        </svg>
      </label>
    </div>
    <div class="select-content" [hidden]="!open">
      <input type="text" class="search-box" placeholder="Search" [(ngModel)]="searchQuery" (keyup)="search()" [hidden]="hideSearch" />
      <div #items class="scroll-container margin-top-10">
        <ng-content select=".items"></ng-content>
      </div>
    </div>
  </div>
`;
/** @type {?} */
export const style = `
.select-box {
    position: relative;
  }
  .select-box .select-content {
    position: absolute;
    top: 42px;
    left: 0;
    right: 0;
    border-radius: 0 0 4px 4px;
    border: 1px solid #d2d2dc;
    border-top: none;
    padding: 0 15px 15px;
    background-color: white;
    z-index: 4;
    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.1);
  }
  .select-box .select-content .search-box {
    background-color: #f0f2f4;
    display: block;
    width: 100%;
    border: 1px solid lightgray;
    padding: 0 10px;
    height: 36px;
    border-radius: 3px;
  }
  .label {
    font-size: 1.14rem;
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid #d2d2dc;
    width: 100%;
    outline: 0;
    height: 42px;
    background-color: white;
    position: relative;
  }
  .label.open {
    border-radius: 4px 4px 0 0;
    border-bottom: 0;
    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.1);
  }
  .label label {
    line-height: 42px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
    height: 42px;
    white-space: nowrap;
    display: inline-block;
  }
  .label label.placeholder {
    color: #d9d9e1;
  }
  .label label svg {
    position: absolute;
    right: 15px;
    top: 13px;
    fill: #d9d9e1;
  }
  .label:hover, .label label:hover, .label svg:hover {
    cursor: pointer;
  }
  .items {
    list-style: none;
  }
  .scroll-container {
    max-height: 95px;
    margin-top: 10px;
    overflow-y: auto;
  }

  .scroll-container::-webkit-scrollbar-track
  {
    background-color: #f0f2f4;
  }

  .scroll-container::-webkit-scrollbar
  {
    width: 5px;
    background-color: #f0f2f4;
  }

  .scroll-container::-webkit-scrollbar-thumb
  {
    background-color: #ccc;
  }

  .show {
    display: inline-block;
  }

  .hide {
    display: none;
  }


  :host ::ng-deep ::placeholder {
    color: lightgray;
  }

  :host ::ng-deep .custom-input {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :host ::ng-deep .custom-input input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  :host ::ng-deep .custom-input input[type=checkbox] ~  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #f0f2f4;
    border-radius: 3px;
  }
  :host ::ng-deep .custom-input input[type=radio] ~  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #f0f2f4;
    border-radius: 50%;
  }

  :host ::ng-deep .custom-input:hover input ~  .checkmark {
    background-color: #ccc;
  }

  :host ::ng-deep .custom-input input[type=checkbox]:checked ~  .checkmark {
    background: #1dbadf;
  }

  :host ::ng-deep .custom-input input[type=checkbox]:checked ~  .checkmark:after {
    left: 6px;
    top: 3px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  :host ::ng-deep .custom-input .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  :host ::ng-deep .custom-input input:checked ~  .checkmark:after {
    display: block;
  }

  :host ::ng-deep .custom-input input[type=radio] ~  .checkmark:after {
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #1dbadf;
  }

`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNlbGVjdGJveC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zZWxlY3Rib3gvIiwic291cmNlcyI6WyJsaWIvbmd4LXNlbGVjdGJveC5jb21wb25lbnQuaHRtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sT0FBTyxRQUFRLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQ3ZCOztBQUVELE1BQU0sT0FBTyxLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0xwQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgPGRpdiAjd3JhcHBlciBjbGFzcz1cInNlbGVjdC1ib3hcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIiAoY2xpY2spPVwidG9nZ2xlKClcIiBbY2xhc3Mub3Blbl09XCJvcGVuXCI+XG4gICAgICA8bGFiZWwgW2NsYXNzLnBsYWNlaG9sZGVyXT1cIiFsYWJlbFwiPlxuICAgICAgICB7eyBsYWJlbCA/IGxhYmVsIDogcGxhY2Vob2xkZXIgfX1cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgW2F0dHIuY2xhc3NdPVwib3BlbiA/ICdoaWRlJyA6ICdzaG93J1wiIGlkPVwiaWNvbi1hcnJvdy1kb3duXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgICAgICAgIHdpZHRoPVwiMTZweFwiIGhlaWdodD1cIjE2cHhcIiB2aWV3Qm94PVwiMCAwIDI4NC45MjkgMjg0LjkyOVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODQuOTI5IDI4NC45Mjk7XCJcbiAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yODIuMDgyLDc2LjUxMWwtMTQuMjc0LTE0LjI3M2MtMS45MDItMS45MDYtNC4wOTMtMi44NTYtNi41Ny0yLjg1NmMtMi40NzEsMC00LjY2MSwwLjk1LTYuNTYzLDIuODU2TDE0Mi40NjYsMTc0LjQ0MVxuICAgICAgICAgICAgICBMMzAuMjYyLDYyLjI0MWMtMS45MDMtMS45MDYtNC4wOTMtMi44NTYtNi41NjctMi44NTZjLTIuNDc1LDAtNC42NjUsMC45NS02LjU2NywyLjg1NkwyLjg1Niw3Ni41MTVDMC45NSw3OC40MTcsMCw4MC42MDcsMCw4My4wODJcbiAgICAgICAgICAgICAgYzAsMi40NzMsMC45NTMsNC42NjMsMi44NTYsNi41NjVsMTMzLjA0MywxMzMuMDQ2YzEuOTAyLDEuOTAzLDQuMDkzLDIuODU0LDYuNTY3LDIuODU0czQuNjYxLTAuOTUxLDYuNTYyLTIuODU0TDI4Mi4wODIsODkuNjQ3XG4gICAgICAgICAgICAgIGMxLjkwMi0xLjkwMywyLjg0Ny00LjA5MywyLjg0Ny02LjU2NUMyODQuOTI5LDgwLjYwNywyODMuOTg0LDc4LjQxNywyODIuMDgyLDc2LjUxMXpcIi8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgW2F0dHIuY2xhc3NdPVwib3BlbiA/ICdzaG93JyA6ICdoaWRlJ1wiIGlkPVwiaWNvbi1hcnJvdy11cFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcbiAgICAgICAgICB3aWR0aD1cIjE2cHhcIiBoZWlnaHQ9XCIxNnB4XCIgdmlld0JveD1cIjAgMCAyODQuOTI5IDI4NC45MjlcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg0LjkyOSAyODQuOTI5O1wiXG4gICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjgyLjA4MiwxOTUuMjg1TDE0OS4wMjgsNjIuMjRjLTEuOTAxLTEuOTAzLTQuMDg4LTIuODU2LTYuNTYyLTIuODU2cy00LjY2NSwwLjk1My02LjU2NywyLjg1NkwyLjg1NiwxOTUuMjg1XG4gICAgICAgICAgICAgIEMwLjk1LDE5Ny4xOTEsMCwxOTkuMzc4LDAsMjAxLjg1M2MwLDIuNDc0LDAuOTUzLDQuNjY0LDIuODU2LDYuNTY2bDE0LjI3MiwxNC4yNzFjMS45MDMsMS45MDMsNC4wOTMsMi44NTQsNi41NjcsMi44NTRcbiAgICAgICAgICAgICAgYzIuNDc0LDAsNC42NjQtMC45NTEsNi41NjctMi44NTRsMTEyLjIwNC0xMTIuMjAybDExMi4yMDgsMTEyLjIwOWMxLjkwMiwxLjkwMyw0LjA5MywyLjg0OCw2LjU2MywyLjg0OFxuICAgICAgICAgICAgICBjMi40NzgsMCw0LjY2OC0wLjk1MSw2LjU3LTIuODQ4bDE0LjI3NC0xNC4yNzdjMS45MDItMS45MDIsMi44NDctNC4wOTMsMi44NDctNi41NjZcbiAgICAgICAgICAgICAgQzI4NC45MjksMTk5LjM3OCwyODMuOTg0LDE5Ny4xODgsMjgyLjA4MiwxOTUuMjg1elwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LWNvbnRlbnRcIiBbaGlkZGVuXT1cIiFvcGVuXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlYXJjaC1ib3hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIFsobmdNb2RlbCldPVwic2VhcmNoUXVlcnlcIiAoa2V5dXApPVwic2VhcmNoKClcIiBbaGlkZGVuXT1cImhpZGVTZWFyY2hcIiAvPlxuICAgICAgPGRpdiAjaXRlbXMgY2xhc3M9XCJzY3JvbGwtY29udGFpbmVyIG1hcmdpbi10b3AtMTBcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiLml0ZW1zXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gYFxuLnNlbGVjdC1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2VsZWN0LWJveCAuc2VsZWN0LWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQycHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmRjO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogNDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5zZWxlY3QtYm94IC5zZWxlY3QtY29udGVudCAuc2VhcmNoLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMTRyZW07XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmRjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubGFiZWwub3BlbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5sYWJlbCBsYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNDJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAubGFiZWwgbGFiZWwucGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZDlkOWUxO1xuICB9XG4gIC5sYWJlbCBsYWJlbCBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTVweDtcbiAgICB0b3A6IDEzcHg7XG4gICAgZmlsbDogI2Q5ZDllMTtcbiAgfVxuICAubGFiZWw6aG92ZXIsIC5sYWJlbCBsYWJlbDpob3ZlciwgLmxhYmVsIHN2Zzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5pdGVtcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICAuc2Nyb2xsLWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogOTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICAuc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcbiAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjQ7XG4gIH1cblxuICAuc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXJcbiAge1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNDtcbiAgfVxuXG4gIC5zY3JvbGwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxuICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgfVxuXG4gIC5zaG93IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG5cbiAgOmhvc3QgOjpuZy1kZWVwIDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWlucHV0IGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20taW5wdXQgaW5wdXRbdHlwZT1jaGVja2JveF0gfiAgLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWlucHV0IGlucHV0W3R5cGU9cmFkaW9dIH4gIC5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWlucHV0OmhvdmVyIGlucHV0IH4gIC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1pbnB1dCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIH4gIC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQ6ICMxZGJhZGY7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1pbnB1dCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIH4gIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGxlZnQ6IDZweDtcbiAgICB0b3A6IDNweDtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1pbnB1dCAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20taW5wdXQgaW5wdXQ6Y2hlY2tlZCB+ICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWlucHV0IGlucHV0W3R5cGU9cmFkaW9dIH4gIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIHRvcDogNHB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMxZGJhZGY7XG4gIH1cblxuYDtcbiJdfQ==