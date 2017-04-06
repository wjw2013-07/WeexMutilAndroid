package com.weex.mix;

import android.app.Application;

import com.weex.mix.weex.WeexConfig;

/**
 * Created by codemanwang on 2017/3/17.
 */

public class WxApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        WeexConfig.initConfig(this);
    }
}
