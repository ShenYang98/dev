<template>
  <div class="container" :class="{ dynamic: isDynamic }">
    <div v-if="form.values.length > 1" class="alter1">且</div>
    <el-form :model="form" ref="createForm" class="demo-dynamic">
      <dynamic v-model="form.values"></dynamic>
    </el-form>
    <el-button class="submit" @click="submitForm">提交</el-button>
    <el-button class="add" @click="add">添加</el-button>
  </div>
</template>

<script>
import Dynamic from "../components//Dynamic.vue";
export default {
  name: "Count",
  data() {
    return {
      form: {
        values: [
          [
            {
              value1: "",
              value2: "",
              value3: "",
              value4: "",
              status: "且",
            },
          ],
        ],
      },
      isDynamic: false,
    };
  },
  components: {
    Dynamic,
  },
  methods: {
    submitForm() {
      console.log(this.form);
      this.form.values.forEach((item) => {
        item.forEach((i) => {
          if (!i.value1 || !i.value2 || !i.value3 || !i.value4) {
            this.$notify({
              title: "提醒",
              message: "请填写表单项",
              type: "error",
              duration: 2000,
            });
          } else {
            this.$notify({
              title: "提醒",
              message: "验证通过，可以提交表单",
              type: "success",
              duration: 2000,
            });
          }
        });
      });
    },
    add() {
       this.form.values.push([{ status: "且" }]);
       this.isDynamic = this.form.values.length > 1 ? true : false
    },
  },
};
</script>

<style scoped>
.demo-dynamic {
  /* border-left: 1px solid red; */
  padding-left: 30px;
}
.dynamic {
  border-left: 1px solid gray;
}
.submit {
  position: absolute;
  right: 20%;
}
.alter1 {
  width: 20px;
  height: 20px;
  background-color: blue;
  color: #fff;
  position: absolute;
  text-align: center;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
}
.container {
  /* height: 300px; */
  position: relative;
  margin-top: 20px;
  padding-bottom: 60px;
}
.add {
  position: absolute;
  bottom: -50px;
  left: -20px;
}
</style>