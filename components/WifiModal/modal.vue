<template>
  <div>
    <div class="modal wifi-modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <button class="modal-close" type="button" @click="closeModal">
              <nuxt-icon name="close" class="modal-close-icon" />
              <span>Kapat</span>
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-top">
              <i class="fa-solid fa-wifi"></i>
              <h2>Wifi ağına bağlan</h2>
            </div>
            <div class="modal-ort">
              <div class="modal-center">
                <span>Ağ Adı</span>
                <h5>SUPERONLINE-WIFI-4242</h5>
              </div>

              <div class="modal-center">
                <span>Parola</span>
                <h5 id="password">uck99924?</h5>
              </div>

            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button class="password-copy" id="passCopy" @click="passwordCopy">{{ passwordCopyText }}</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  closeModal : {
    type: Function,
    required: true,
  }
});

const passwordCopyText = ref('Parola Kopyala');
const passwordCopy = async () => {
  const passwordElement = document.getElementById('password');
  try {
    await navigator.clipboard.writeText(passwordElement.innerText);
    passwordCopyText.value = 'Kopyalandı';
  }
  catch (err) {
    console.error('Kopyalama Başarısız');
  }
}
</script>

<style lang="scss" scoped>

</style>