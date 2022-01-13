<template>
  <div class="dynamic-attribute">
    <div
      v-for="(item, index) in values"
      :key="index"
      class="dynamic-attribute-body"
      :class="{ dynamic: item.length > 1 }"
    >
      <div v-if="values[index].length > 1">
        <div
          class="alter1"
          v-if="values[index][0].status === '且'"
          @click="alter(item)"
        >
          且
        </div>
        <div
          class="alter2"
          v-if="values[index][0].status === '或'"
          @click="alter(item)"
        >
          或
        </div>
      </div>
      <el-row
        class="row"
        :gutter="0"
        v-for="(value, index) in item"
        :key="index"
      >
        <!-- 框1 -->
        <el-col :span="6">
          <div v-if="value.status === '且'" class="dynamic-icon1"></div>
          <div v-if="value.status === '或'" class="dynamic-icon2"></div>
          <el-form-item
            :rules="{
              required: true,
              message: '请选择',
              trigger: 'change',
            }"
          >
            <el-select
              v-model="value.value1"
              :placeholder="'请选择'"
              value-key="code"
              clearabe
              @change="change1()"
            >
              <el-option
                v-for="(item, index) in option1"
                :key="index"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 框2 -->
        <el-col :span="6">
          <el-form-item
            :rules="{
              required: true,
              message: '请填写',
              trigger: 'blur',
            }"
          >
            <el-select
              v-if="value.value1"
              v-model="value.value2"
              clearabe
              :placeholder="'请选择'"
              @change="change2()"
            >
              <el-option
                v-for="(item, index) in option2"
                :key="index"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 框3 -->
        <el-col :span="6">
          <el-form-item
            :rules="{
              required: true,
              message: '请填写',
              trigger: 'blur',
            }"
          >
            <el-select
              v-if="value.value2"
              v-model="value.value3"
              clearabe
              :placeholder="'请选择'"
              @change="change3()"
            >
              <el-option
                v-for="(item, index) in option3"
                :key="index"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 框4 -->
        <el-col :span="6">
          <el-form-item
            label=""
            :rules="{
              required: true,
              message: '请填写',
              trigger: 'blur',
            }"
          >
            <el-input
              v-if="isDateType(value.code)"
              v-model="value.value4"
              :placeholder="'请填写'"
            ></el-input>
            <el-date-picker
              v-if="isDateType(value.code)"
              v-model="value.value"
              type="date"
              value-format="yyyy-MM-dd"
            />
            <el-date-picker
              v-if="isDateTimeType(value.code)"
              v-model="value.value"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
            />
            <el-select
              v-if="value.value3"
              v-model="value.value4"
              multiple
              :placeholder="'请选择'"
              @change="change4"
            >
              <el-option
                v-for="(item, index) in option4"
                :key="index"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="2" class="del">
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            circle
            @click.prevent="removeDynamicAttributeFromValues(value)"
          ></el-button>
        </el-col>
      </el-row>
      <el-button
        class="add"
        type="success"
        icon="el-icon-plus"
        v-if="item.length != 0"
        circle
        size="mini"
        @click="addDynamicAttributeForm(item)"
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicAttributesFormItem",
  model: {
    prop: "values",
    event: "change",
  },
  props: {
    values: {
      type: Array,
      default: function () {
        return [];
      },
    },
    attributeOptions: {
      type: Array,
      required: false,
      default: function () {
        return [];
      },
    },
  },
  watch: {
    values(val) {
      // console.log(JSON.stringify(val));
      // console.log(this.values[0]);
    },
  },
  data() {
    return {
      // internalValues: this.values
      select1: "",
      select2: "",
      select3: "",
      select4: "",
      option1: [
        {
          name: "客户信息1",
        },
        {
          name: "客户信息2",
        },
      ],
    };
  },
  mounted() {
    if (!this.values) {
      this.values = [];
    }
    // this.changeAttributeOptionsDisabled()
  },
  methods: {
    change1() {
      this.select1 = "select";
      this.option2 = [
        {
          name: "职业",
        },
        {
          name: "年龄",
        },
      ];
    },
    change2() {
      this.select2 = "select";
      this.option3 = [
        {
          name: "包含",
        },
        {
          name: "不包含",
        },
      ];
    },
    change3() {
      this.select3 = "select";
      this.option4 = [
        {
          name: "学生",
        },
        {
          name: "教师",
        },
      ];
    },
    change4() {
      this.select4 = "select4";
    },
    alter(value) {
      if (value[0].status === "且")
        value.forEach((item) => {
          item.status = "或";
        });
      else {
        value.forEach((item) => {
          item.status = "且";
        });
      }
    },
    addDynamicAttributeForm(value) {
      if (!this.select1 || !this.select2 || !this.select3 || !this.select4) {
        this.$notify({
          title: "提醒",
          message: "请填写表单项",
          type: "error",
          duration: 2000,
        });
        return;
      } else {
        this.select1 = "";
        this.select2 = "";
        this.select3 = "";
        this.select4 = "";
        value.push({ status: "且" });
      }
    },
    // changeAttributeOptionsDisabled() {
    //     this.attributeOptions.forEach((option, index) => {
    //         const choseOption = this.values.some(value => {
    //             return value.code === option.code
    //         })
    //         if (choseOption) {
    //             option.disabled = true
    //         } else {
    //             option.disabled = false
    //         }
    //     })
    // },
    removeDynamicAttributeFromValues(value) {
      this.values.forEach((item) => {
        const index = item.indexOf(value);
        if (index !== -1) {
          item.splice(index, 1);
        }
      });
      // this.changeAttributeOptionsDisabled();
    },
    isStringType(code) {
      const option = this.getAttributeOptionByCode(code);
      return option && option.type === "String";
    },
    isDateType(code) {
      const option = this.getAttributeOptionByCode(code);
      return option && option.type === "Date";
    },
    isDateTimeType(code) {
      const option = this.getAttributeOptionByCode(code);
      return option && option.type === "DateTime";
    },
    getAttributeOptionByCode(code) {
      return this.attributeOptions.find((option) => {
        return option.code === code;
      });
    },
    getSelectAttributeOptionsByCode(code) {
      const option = this.getAttributeOptionByCode(code);
      return option ? option.options : [];
    },
  },
};
</script>

<style scoped lang="less">
.dynamic {
  border-left: 1px solid gray;
}
.dynamic-attribute-body {
  width: 1000px;
  margin-top: 40px;
  padding-left: 60px;
  position: relative;
  .alter1 {
    width: 20px;
    height: 20px;
    background-color: blue;
    color: #fff;
    position: absolute;
    text-align: center;
    // left: -20px;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .alter2 {
    width: 20px;
    height: 20px;
    background-color: green;
    color: #fff;
    position: absolute;
    text-align: center;
    // left: -20px;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .dynamic-icon1 {
    position: absolute;
    left: -20px;
    top: 12px;
    width: 10px;
    height: 15px;
    background-color: blue;
  }
  .dynamic-icon2 {
    position: absolute;
    left: -20px;
    top: 12px;
    width: 10px;
    height: 15px;
    background-color: green;
  }
  .row {
    height: 60px;
  }
  .del {
    position: absolute;
    right: 0;
    text-align: center;
    width: 20px;
    height: 40px;
    line-height: 40px;
  }
  .add {
    position: absolute;
    left: 45px;
  }
}
.dynamic-attribute .dynamic-attribute-header {
  border-bottom: 1px solid #dfe6ec;
  padding-bottom: 2px;
  margin-bottom: 10px;
  font-weight: bold;
  // width: 800px;
}
</style>