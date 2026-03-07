<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

export default {
  name: 'CategoryChart',

  components: { Line },

  props: {
    labels: {
      type: Array,
      required: true
    },
    values: {
      type: Array,
      required: true
    }
  },

  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'الارباح ',
            data: this.values,
            borderColor: '#ef4444',
            backgroundColor: '#ef4444',
            tension: 0.4,
            fill: false
          }
        ]
      }
    },

    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true
          }
        }
      }
    }
  }
}
</script>

<template>
  <div style="height:400px">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>