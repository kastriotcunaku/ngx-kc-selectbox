export const template = `
<div #wrapper class="select-box">
  <div class="label" (click)="open = !open" [class.open]="open">
    <label [class.placeholder]="!label">
      {{ label ? label : placeholder }}
      <svg version="1.1" [attr.class]="open ? 'hide' : 'show'" id="icon-arrow-down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="16px" height="16px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;"
        xml:space="preserve">
        <g>
          <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
            L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
            c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
            c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
        </g>
      </svg>
      <svg version="1.1" [attr.class]="open ? 'show' : 'hide'" id="icon-arrow-up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
    top: 15px;
    fill: #d9d9e1;
  }
  .label:hover {
    cursor: pointer;
  }
  .items {
    list-style: none;
  }
  .scroll-container {
    max-height: 95px;
    margin-top: 10px;
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

/* Hide the browser's default radio button */
:host ::ng-deep .custom-input input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

:host ::ng-deep .custom-input input[type=checkbox] ~ .checkmark {
  position: absolute;
  top: 3px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #f0f2f4;
  border-radius: 3px;
}
:host ::ng-deep .custom-input input[type=radio] ~ .checkmark {
  position: absolute;
  top: 3px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: lightgray;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
:host ::ng-deep .custom-input:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
:host ::ng-deep .custom-input input[type=checkbox]:checked ~ .checkmark {
  background-color: lightgray;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
:host ::ng-deep .custom-input .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
:host ::ng-deep .custom-input input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
:host ::ng-deep .custom-input input[type=radio] ~ .checkmark:after {
  top: 4px;
  left: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1dbadf;
}

:host ::ng-deep .container input[type=checkbox] ~ .checkmark:after {
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
  
  `;
