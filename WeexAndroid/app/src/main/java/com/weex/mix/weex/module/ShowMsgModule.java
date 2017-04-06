package com.weex.mix.weex.module;

import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

/**
 * Created by codemanwang on 2017/3/31.
 */

public class ShowMsgModule extends WXModule {

    @WXModuleAnno(runOnUIThread = true)
    public void printLog(String msg){
        if (TextUtils.isEmpty(msg)){
            return;
        }

        Toast.makeText(mWXSDKInstance.getContext(), msg, Toast.LENGTH_SHORT).show();
    }

    @WXModuleAnno(runOnUIThread = false)
    public void callTheCallback(JSCallback callback){
        for(int i = 0; i<5;i++){
            Log.i("weex","test call back -->"+i);
        }
        callback.invoke("native回调weex方法");
    }
}
