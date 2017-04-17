package com.weex.mix.weex;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.weex.mix.weex.adapter.ImageAdapter;
import com.weex.mix.weex.component.RichText;
import com.weex.mix.weex.module.ShowMsgModule;

/**
 * Created by codemanwang on 2017/3/31.
 */

public class WeexConfig {

    public static void initConfig(Application application){
        try {
            if (application != null){
                WXSDKEngine.initialize(application,
                        new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build());
            }
            WXSDKEngine.addCustomOptions("appName", "WeexAndroid");
            WXSDKEngine.registerModule("ShowMsgModule", ShowMsgModule.class);
            WXSDKEngine.registerComponent("RichText", RichText.class);
        } catch (WXException e) {
            e.printStackTrace();
        }

    }


    public static void initDebugEnvironment(boolean enable, String host) {
        // 是否开启 debug 模式，默认关闭
        WXEnvironment.sRemoteDebugMode = enable;
        // DebugServer的websocket地址
        WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native";

    }
}
