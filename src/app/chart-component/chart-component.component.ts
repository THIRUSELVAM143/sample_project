import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponent implements OnInit {
  posts: any[] = [];
  userIdData: { userId: number, count: number }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
        this.processData();
        this.renderChart();
      });
  }

  processData() {
    // Initialize a map to count occurrences of each userId
    const userIdCountMap = new Map<number, number>();
  
    this.posts.forEach(post => {
      const userId = post.userId;
      // Check if userId is already in the map
      if (userIdCountMap.has(userId)) {
        // Increment count if userId exists
        userIdCountMap.set(userId, userIdCountMap.get(userId)! + 1); // Add '!' to assert non-null
      } else {
        // Initialize count to 1 if userId does not exist in the map
        userIdCountMap.set(userId, 1);
      }
    });
  
    // Convert map to array for Chart.js data format
    this.userIdData = Array.from(userIdCountMap, ([userId, count]) => ({ userId, count }));
  }
  
  renderChart() {
    const userIds = this.userIdData.map(data => data.userId);
    const counts = this.userIdData.map(data => data.count);

    const ctx = document.getElementById('userIdChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: userIds.map(id => `User ${id}`),
        datasets: [{
          label: 'Number of Posts',
          data: counts,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Posts'
            }
          },
          x: {
            title: {
              display: true,
              text: 'User ID'
            }
          }
        }
      }
    });
  }
}
