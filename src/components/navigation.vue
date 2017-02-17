<template>
    <div class="hb-topbar">
      <div class="hb-top-wrap">
        <!-- 导航栏商标 -->
        <div class="hb-topbar-brand">
          <a href="#">
            <img src="http://sr4.pplive.com/cms/15/65/d61b45b5a6219b5e1e98778eac3f9f94.gif">
          </a>
        </div>
        <form class="hb-topbar-form">
          <div class="hb-form-searchtxt">
            <input type="text" class="hb-input-sm" placeholder="搜索">
          </div>
          <input type="submit" value="搜索" title="搜索" class="hb-btn-search">
        </form>
        <div class="hb-header_nav">
          <ul class="cf">
              <!--以15个为上限-->
              <li>
                <router-link  :to="{name:''}" class="hb-sub-tab-top" >首页</router-link>
              </li>
              <li v-for="top_item in programClass" class="w_3">
                <router-link  to="/type" class="hb-sub-tab-top" v-text="top_item.ClassName"></router-link>
                <div class="hb-sub-tab">
                  <div class="hb-sub-tab-subs">
                    <a href="http://v.pptv.com/show/o5lz8VmicL23QTrY.html" target="_play"
                    v-for="second_item in top_item.children" v-text="second_item.ClassName"></a>
                  </div>

                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  	name:'navigation',
  	props:['programClass']
}
</script>