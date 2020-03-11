<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__name">
        <div class="modal__name_avatar">N</div>
        <div class="modal__name_text">
          Name
        </div>
      </div>
      <div class="modal__info">
        <table>
          <tr class="modal__info_row">
            <td>
              <span class="modal__info_byear modal__info_item">
                Birth year
              </span>
            </td>
            <td>
              <span class="modal__info_description">
                Birth year
              </span>
            </td>
          </tr >
          <tr class="modal__info_row">
            <td>
              <span class="modal__info_species modal__info_item">
                Species
              </span>
            </td>
            <td>
              <span class="modal__info_description">
                Species
              </span>
            </td>
          </tr>
          <tr class="modal__info_row">
            <td>
              <span class="modal__info_gender modal__info_item">
                Gender
              </span>
            </td>
            <td>
              <span class="modal__info_description">
                Gender
              </span>
            </td>
          </tr>
        </table>
        <table>
          <tr class="modal__info_row">
            <td>
              <span class="modal__info_homeworld modal__info_item">
                Homeworld
              </span>
            </td>
            <td>
              <span class="modal__info_description">
                Homeworld
              </span>
            </td>
          </tr>
          <tr class="modal__info_row">
            <td>
              <span class="modal__info_films modal__info_item">
                Films
              </span>
            </td>
            <td>
              <span class="modal__info_description">
                Films
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <svg class="modal__close-btn" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 13L13 1M13 13L1 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "HomeModal"
  }
</script>

<style scoped lang="scss">
  .modal {
    background-color: #1A1A1A;
    border-radius: 8px;
    width: 800px;
    height: 492px;
    position: relative;
    display: block;
    /*left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);*/
    &__content {
      padding: 80px;
    }
    &__name {
      display: flex;
      border-bottom: 2px solid #808080;
      padding-bottom: 80px;
      &_avatar {
        font-weight: 500;
        font-size: 48px;
        line-height: 80px;
        color: #FFF;
        text-align: center;
        width: 80px;
        height: 80px;
        background-color: #BB86FC;
        border-radius: 50%;
      }
      &_text {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        font-feature-settings: 'liga' off;
        color: #FFF;
        align-self: center;
        padding-left: 16px;
      }
    }
    &__info {
      font-size: 18px;
      line-height: 21px;
      font-feature-settings: 'liga' off;
      color: #808080;
      display: flex;
      flex-wrap: wrap;
      margin-top: 70px;
      &_row {
        td {
          padding-bottom: 15px;
        }
      }
      &_item {
        width: 220px;
        padding-right: 30px;
        &::before {
          width: 20px;
          height: 20px;
          content: '';
          display: inline-block;
          background-image: url("../../assets/img/modal__spritesheet.png");
          background-repeat: no-repeat;
          transform: translateY(3px);
          padding-right: 7px;
        }
      }
      &_byear::before {
        background-position: -65px -5px;
      }
      &_species::before {
        background-position: -123px -5px;
      }
      &_gender::before {
        background-position: -35px -5px;
      }
      &_homeworld::before {
        background-position: -5px -5px;
      }
      &_films::before {
        background-position: -93px -5px;
      }
      &_description {
        font-weight: bold;
        color: #FFF;
        margin-right: 70px;
      }
    }
    &__close-btn {
      position: absolute;
      top: 22px;
      right: 22px;
      cursor: pointer;
    }
  }
</style>
