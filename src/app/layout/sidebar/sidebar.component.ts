import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItem: any[] = [];
  isUMMenuOpen = false;
  constructor() { }

  ngOnInit(): void {
    this.setupMenu()
  }

  toggleUMMenu(){
    this.isUMMenuOpen = !this.isUMMenuOpen;
  }

  setupMenu() {
  this.menuItem = [
    {
      title: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      link: '/dashboard',
      hiddden:false
    },
    {
      title:'user-management',
      icon: 'fas fa-users-cog',
      link: '/um',
      hidden:false,
      children:[
        {
          title: 'Users',
          icon: 'fas fa-user',
          link: '/um/users',
          hidden:false,
        },
        {
          title: 'Roles',
          icon: 'fas fa-user-tag',
          link: '/um/roles',
          hidden:false,
        },
        {
          title: 'Permissions',
          icon: 'fas fa-user-shield',
          link: '/um/permissions',
             hidden:false,
        }

      ]

    }






  ]
  }
}
