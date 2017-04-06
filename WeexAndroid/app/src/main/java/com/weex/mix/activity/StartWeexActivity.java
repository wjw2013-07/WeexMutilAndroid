package com.weex.mix.activity;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.taobao.weex.WXSDKInstance;
import com.weex.mix.R;

/**
 * Created by codemanwang on 2017/3/17.
 */

public class StartWeexActivity extends AbsWeexActivity{

    private static String TEST_URL = "http://10.1.193.9:8080/dist/script_use.js";
    private static String LOCAL_URL = "file://assets/script_use.weex.js";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_start);

        setContainer((FrameLayout) findViewById(R.id.container));
        renderPageByURL(TEST_URL);
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (view.getParent() != null){
            ViewGroup parent = (ViewGroup) view.getParent();
            parent.removeView(view);
        }
        mContainer.addView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }

}
