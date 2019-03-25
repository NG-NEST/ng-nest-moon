import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormOption, InputControl, Row, ButtonsControl, SelectControl } from 'src/share/components/form/form.type';

/**
 * 动态表单
 * 
 * @export
 * @class ExFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-form',
  templateUrl: './ex-form.component.html',
  styleUrls: ['./ex-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExFormComponent implements OnInit {

  formOption: FormOption = {
    title: '销售订单',
    titleLayout: 'left',
    controls: [
      new Row({
        title: '计费方式', icon: 'icon-clock', controls: [
          new ButtonsControl({
            key:'billingMode', type: 'single', buttons: [
              { key: 1, label: '包年包月' },
              { key: 2, label: '按量付费' },
              { key: 3, label: '抢占式实例' }
            ], value: { key: 1 }, tooltip: {
              message: `<h1>包年包月</h1>
            <p>按月购买及续费，为预付费模式。</p>
            <p>若购买中国大陆地域的 ECS 用于网站 Web 访问，请及时备案。</p>
            <p>若 ECS 用于 SLB，请前往 SLB 新购页面购买带宽，ECS 仅需保留少量带宽以便您管理。</p>
            
            <h1>按量付费</h1>
            <p>按实际开通时长以小时为单位进行收费，后付费模式。</p>
            <p>按量付费 ECS 不支持备案服务。</p>
            
            <h1>抢占式实例</h1>
            <p>相对于按量付费实例价格有一定的折扣，价格随供求波动，按实际使用时长进行收费，后付费模式。</p>
            <p>您愿意支付每小时的实例最高价。当您的出价高于当前市场成交价时，您的实例就会运行。</p>
            <p>阿里云会根据供需资源或市场成交价的变化释放您的抢占式实例。</p>
            <p>抢占式实例不支持备案服务。</p>` }
          })
        ]
      }),
      new Row({
        title: '地域', icon: 'icon-map-pin', controls: [
          new SelectControl({
            key:'area', type: 'buttons', showType: 'hover', value: { key: 1, label: '华北1（青岛）' }, data: [
              {
                key: 1, label: '亚太', data: [
                  { key: 1, label: '华北1（青岛）' },
                  { key: 2, label: '华北2（北京）' },
                  { key: 3, label: '华北3（张家口）' },
                  { key: 4, label: '华北4（呼和浩特）' },
                  { key: 5, label: '华东1（杭州）' }
                ]
              },
              {
                key: 2, label: '欧洲与美洲', data: [
                  { key: 6, label: '美国西部（硅谷）' },
                  { key: 7, label: '美国东部（弗吉尼亚）' },
                  { key: 8, label: '欧洲中部（法兰克福）' },
                  { key: 9, label: '英国（伦敦）' }
                ]
              },
              {
                key: 3, label: '中东与印度', data: [
                  { key: 10, label: '中东东部（迪拜）' },
                  { key: 11, label: '亚太南部（孟买）' }
                ]
              }
            ], tooltip: {
              message: `<h1>地域：</h1>
              <p>地域指的是 ECS 实例所在的物理位置。</p>
              <h1>可用区：</h1>
              <p>可用区是指在同一地域内，电力和网络互相独立的物理区域。在同一地域内可用区与可用区之间内网互通，可用区之间能做到故障隔离。</p>
              <p>如果您的应用需要较高的容灾能力，建议您将云服务器 ECS 实例部署在同一地域的不同可用区内。</p>
              <p>如果您的应用在实例之间需要较低的网络时延，则建议您将 ECS 实例创建在相同的可用区内。</p>` }
          })
        ]
      }),
      new Row({
        title: '实例', icon: 'icon-server', controls: [
          new SelectControl({
            key:'cpu', label: 'vCPU', data: [
              { key: 1, label: '1 vCPU' },
              { key: 2, label: '2 vCPU' },
              { key: 3, label: '4 vCPU' },
              { key: 4, label: '8 vCPU' },
              { key: 5, label: '12 vCPU' },
              { key: 6, label: '16 vCPU' },
              { key: 7, label: '24 vCPU' },
              { key: 8, label: '32 vCPU' },
              { key: 9, label: '56 vCPU' },
              { key: 10, label: '64 vCPU' }
            ], placeholder: '请选择 vCPU', col: 0
          }),
          new SelectControl({
            key:'memory', label: '内存', data: [
              { key: 1, label: '1 GiB' },
              { key: 2, label: '2 GiB' },
              { key: 3, label: '4 GiB' },
              { key: 4, label: '8 GiB' },
              { key: 5, label: '12 GiB' },
              { key: 6, label: '16 GiB' },
              { key: 7, label: '24 GiB' },
              { key: 8, label: '32 GiB' },
              { key: 9, label: '56 GiB' },
              { key: 10, label: '64 GiB' },
              { key: 11, label: '128 GiB' }
            ], placeholder: '请选择内存', col: 0
          }),
          new InputControl({ key:'standard', label: '实例规格', placeholder: '如：ecs.sn1ne.large', layout: 'horizontal', col: 0 })
        ]
      }),
      new Row({
        title: '镜像', icon: 'icon-copy', controls: [
          new ButtonsControl({
            key: 'image', type: 'single', buttons: [
              { key: 1, label: '系统镜像' },
              { key: 2, label: '自定义镜像' },
              { key: 3, label: '共享镜像' },
              { key: 4, label: '镜像市场' }
            ], value: { key: 1 }, tooltip: {
              message: `<h1>系统镜像</h1>
              <p>是由阿里云官方或第三方合作商家提供的系统基础镜像，仅包括初始系统环境。请根据您的实际情况自助配置应用环境或相关软件配置。</p>
              
              <h1>自定义镜像</h1>
              <p>基于用户系统快照生成，包括初始系统环境、 应用环境和相关软件配置 。选择自定义镜像创建云服务器，节省您的重复配置时间。</p>
              
              <h1>共享镜像</h1>
              <p>是其他账号的自定义镜像主动共享给您使用的镜像。阿里云不保证其他账号共享给您的镜像的完整性和安全性，使用共享镜像需要自行承担风险。</p>
              
              <h1>镜像市场</h1>
              <p>提供经严格审核的优质镜像，预装操作系统、应用环境和各类软件，无需配置，可一键部署云服务器。满足建站/应用开发/可视化管理等个性化需求。</p>` }
          })
        ]
      })
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
