<template>
  <div id="result">
    <div class="container-fluid">
      <b-card-group deck>
        <div class="d-block w-100">
          <b-card header-tag="header" footer-tag="footer" v-if="results">
            <template #header>
              <h2 class="mb-0">Results</h2>
            </template>
            <div id="card__body">
              <b-table small :fields="fields" :items="results" responsive>
                <template #cell(The_Question)="data">
                  {{ data.item.The_Question }}
                </template>

                <template #cell(Correct_Answer)="data">
                  {{ data.item.Correct_Answer }}
                </template>

                <template #cell(Your_Answer)="data">
                  <i
                    v-if="data.item.isCorrect == true"
                    :class="{ correctAnswer: data.item.isCorrect }"
                    class="wrongAnswer fas fa-check-circle pr-1"
                  ></i>
                  <i
                    v-if="data.item.isCorrect == false"
                    :class="{ correctAnswer: data.item.isCorrect }"
                    class="wrongAnswer fas fa-times-circle pr-1"
                  ></i>
                  <span
                    :class="{ correctAnswer: data.item.isCorrect }"
                    class="wrongAnswer"
                    >{{ data.item.Your_Answer }}</span
                  >
                </template>

                <template #cell(Points)="data">
                  <span
                    :class="{ correctAnswer: data.item.isCorrect }"
                    class="wrongAnswer"
                    >{{ data.item.Points }}</span
                  >
                </template>
              </b-table>
              <b-table-simple>
                <b-tfoot>
                  <b-tr>
                    <b-td colspan="7" variant="secondary" class="text-right">
                      Total Points: <b>{{ getResults.score }}</b>
                    </b-td>
                  </b-tr>
                </b-tfoot>
              </b-table-simple>
            </div>
          </b-card>
        </div>
      </b-card-group>
    </div>
  </div>
</template>
<script src="./result.js"></script>
<style lang="scss" >
#result {
  .card-body {
    padding: 0;
  }
  .table {
    margin-bottom: 0rem;
    th,
    td {
      padding: 10px;
    }
    thead tr:nth-child(1) {
      background-color: #d6d8db;
    }
    thead th:nth-child(1) {
      width: 40%;
    }
    thead-light th:nth-child(2) {
      width: 15%;
    }
    thead-light th:nth-child(3) {
      width: 25%;
    }
    thead-light th:nth-last-child(4) {
      width: 15%;
    }
    tbody tr td:nth-child(1) {
    }
  }
}
.wrongAnswer {
  color: red;
}
.correctAnswer {
  color: green;
}
</style>